import type { ComponentType, JSX } from "react";
import { StatsPage } from "@/pages";

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

function Page() {
    return "2";
}

export const routes: Route[] = [
    { path: "/", Component: StatsPage },
    { path: "/ref", Component: Page, title: "Init Data" },
    { path: "/user", Component: StatsPage, title: "Theme Params" },
];
