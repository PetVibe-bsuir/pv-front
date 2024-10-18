import type {TAchivment} from "@/api";

const AchivmentsCard = ({name, exp, icon}: TAchivment) => {
    return (
        <div className="flex items-center justify-between w-full">
            <img src={icon} alt="icon" />
            <div>
                <h4>{name}</h4>
                <span>{exp}</span>
            </div>
        </div>
    );
};

export default AchivmentsCard;