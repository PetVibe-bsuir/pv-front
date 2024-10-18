import { type FC, ReactNode } from "react";

type Props = {
    nav: ReactNode;
    children: ReactNode;
};

const Layout: FC<Props> = (props) => {
    return (
        <div className="min-h-screen bg-black pb-16 text-white">
            {props.children}
            {props.nav}
        </div>
    );
};

export default Layout;
