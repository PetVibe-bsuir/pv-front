import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages";
import Layout from "@/layouts/Layout.tsx";
import { routes } from "./navigation/routes";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
