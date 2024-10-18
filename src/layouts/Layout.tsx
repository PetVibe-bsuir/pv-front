import Nav from "@/components/Nav";
import { type FC, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout: FC = () => {
    const location = useLocation();

    const nav = useMemo(() => <Nav location={location.pathname} />, [location.pathname]);

    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            <div className="flex flex-1">
                <Outlet />
            </div>
            {nav}
        </div>
    );
};

export default Layout;
