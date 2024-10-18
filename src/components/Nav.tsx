import { type FC } from "react";
import { Link } from "react-router-dom";
import { ChartBarBig, Gamepad2, TicketCheck } from "lucide-react";

type Props = {
    location: string;
};

const Nav: FC<Props> = () => {
    return (
        <div className="m-2 flex h-16 items-center justify-between rounded-lg border-2 border-neutral-400 bg-neutral-800 px-4">
            <Link to="">
                <Gamepad2 className="text-white" />
            </Link>
            <Link to="user">
                <ChartBarBig className="text-white" />
            </Link>
            <Link to="ref">
                <TicketCheck className="text-white" />
            </Link>
        </div>
    );
};

export default Nav;
