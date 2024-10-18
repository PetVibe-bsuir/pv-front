import type { ComponentType, JSX } from "react";
import { EventPage, GamesPage, HomePage, SkinsPage } from "@/pages";

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    { path: "/", Component: HomePage, title: "Home" },
    { path: "/games", Component: GamesPage, title: "Games" },
    { path: "/event", Component: EventPage, title: "Events" },
    { path: "/skins", Component: SkinsPage, title: "Skins" },
];
