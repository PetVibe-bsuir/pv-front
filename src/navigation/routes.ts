import type { ComponentType, JSX } from "react";
import { EventPage, GamesPage, HomePage } from "@/pages";

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: "/", Component: HomePage },
    { path: "/games", Component: GamesPage, title: "Init Data" },
    { path: "/event", Component: EventPage, title: "Theme Params" },
];
