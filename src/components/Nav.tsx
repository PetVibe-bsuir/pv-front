import { type FC } from "react";
import { Link } from "react-router-dom";
import { ChartBarBigIcon, Gamepad2Icon, TicketCheckIcon } from "lucide-react";

type Props = {
    location: string;
};

const Nav: FC<Props> = () => {
    return (
        <div className="z-50 m-2 flex h-16 items-center justify-between rounded-lg border-2 border-neutral-400 bg-neutral-800 px-4">
            <Link to="/games">
                <Gamepad2Icon className="text-white" />
            </Link>
            <Link to="/">
                <ChartBarBigIcon className="text-white" />
            </Link>
            <Link to="/event">
                <TicketCheckIcon className="text-white" />
            </Link>
        </div>
    );
};

export default Nav;
