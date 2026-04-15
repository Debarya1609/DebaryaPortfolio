import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p) => path.resolve(__dirname, p);
const isProduction = process.argv.includes("--prod");
const port = Number(process.env.PORT) || 5173;

async function createApp() {
  const app = express();
  let vite;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      "/assets",
      express.static(resolve("dist/client/assets"), {
        immutable: true,
        maxAge: "1y",
      }),
    );
    app.use(express.static(resolve("dist/client"), { index: false }));
  }

  app.use(async (req, res) => {
    try {
      const url = req.originalUrl;
      let template;
      let render;

      if (!isProduction) {
        template = await fs.readFile(resolve("index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        ({ render } = await vite.ssrLoadModule("/src/entry-server.tsx"));
      } else {
        template = await fs.readFile(resolve("dist/client/index.html"), "utf-8");
        ({ render } = await import("./dist/server/entry-server.js"));
      }

      const appHtml = render(url);
      const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      if (vite) {
        vite.ssrFixStacktrace(error);
      }
      console.error(error);
      res.status(500).end("Internal Server Error");
    }
  });

  app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port} (${isProduction ? "prod" : "dev"})`);
  });
}

createApp();
