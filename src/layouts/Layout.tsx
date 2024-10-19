import Nav from "@/components/Nav";
import { type FC, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout: FC = () => {
    const location = useLocation();

    const nav = useMemo(() => <Nav location={location.pathname} />, [location.pathname]);

    return (
        <div className="flex min-h-[100dvh] flex-col bg-black text-white">
            <div className="flex flex-1 flex-col">
                <img
                    src="https://utfs.io/f/d6QAdCMhivq5m1wqQUZKhTD2axZncvsleuHzwoRCi8P9fY6k"
                    className="absolute z-0 h-screen w-screen"
                />
                <div className="z-10">
                    <Outlet />
                </div>
            </div>
            {nav}
        </div>
    );
};

export default Layout;
