import { type FC } from "react";
import { Link } from "react-router-dom";
import { BadgeDollarSign, CircleUser, TicketSlashIcon } from "lucide-react";

type Props = {
    location: string;
};
const Nav: FC<Props> = () => {
    return (
        <div className="">
            <Link to="/">
                <BadgeDollarSign className="" />
            </Link>
            <Link to="/user">
                <CircleUser className="" />
            </Link>
            <Link to="/ref">
                <TicketSlashIcon className="" />
            </Link>
        </div>
    );
};

export default Nav;
