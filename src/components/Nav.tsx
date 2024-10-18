import { type FC } from "react";
import { Link } from "react-router-dom";
import { BadgeDollarSign, CircleUser, TicketSlashIcon } from "lucide-react";

type Props = {
    location: string;
};
const Nav: FC<Props> = () => {
    return (
        <div className="fixed bottom-0 z-20 flex h-14 w-full justify-between rounded-t-2xl bg-neutral-700 p-3 px-5">
            <Link to="/">
                <BadgeDollarSign className="h-full" />
            </Link>
            <Link to="/user">
                <CircleUser className="h-full" />
            </Link>
            <Link to="/ref">
                <TicketSlashIcon className="h-full" />
            </Link>
        </div>
    );
};

export default Nav;
