import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import CursorFollowers from "@/components/CursorFollowers";
import SiteCursor from "@/components/SiteCursor";
import { TooltipProvider } from "@/components/ui/tooltip";

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
        <CursorFollowers />
        <SiteCursor />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
