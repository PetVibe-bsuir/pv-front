import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "@/Router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SDKProvider } from "@telegram-apps/sdk-react";

const queryClient = new QueryClient();

function ErrorBoundaryError({ error }: { error: unknown }) {
    return (
        <div>
            <p>An unhandled error occurred:</p>
            <blockquote>
                <code>
                    {error instanceof Error
                        ? error.message
                        : typeof error === "string"
                          ? error
                          : JSON.stringify(error)}
                </code>
            </blockquote>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary fallback={ErrorBoundaryError}>
            <QueryClientProvider client={queryClient}>
                <SDKProvider>
                    <Router />
                </SDKProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    </React.StrictMode>,
);
