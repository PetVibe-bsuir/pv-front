import Levels from "@/components/Levels/Levels";
import Nav from "@/components/Nav";
import { type FC, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout: FC = () => {
    const location = useLocation();

    const nav = useMemo(() => <Nav location={location.pathname} />, [location.pathname]);
    const level = useMemo(() => <Levels location={location.pathname} />, [location.pathname]);

    return (
        <div className="flex min-h-[100dvh] flex-col bg-black text-white">
            <div className="flex flex-1 flex-col">
                <Outlet />
            </div>
            {level}
            {nav}
        </div>
    );
};

export default Layout;
