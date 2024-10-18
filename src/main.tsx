import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "@/Router.tsx";
import { SDKProvider } from "@telegram-apps/sdk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <SDKProvider>
                <Router />
            </SDKProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
