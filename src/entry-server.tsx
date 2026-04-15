import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import AppRoutes from "./AppRoutes";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App>
        <AppRoutes />
      </App>
    </StaticRouter>,
  );
}
