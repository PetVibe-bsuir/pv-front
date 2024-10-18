import { type FC, ReactNode } from "react";

type Props = {
    nav: ReactNode;
    children: ReactNode;
};

const WGradientLayout: FC<Props> = (props) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-400/30 via-black via-[percentage:10%_80%] to-amber-400 pb-16 text-white">
            {props.children}
            {props.nav}
        </div>
    );
};

export default WGradientLayout;
