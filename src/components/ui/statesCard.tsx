interface StatestProps {
    indicator: number;
    title: string;
    color: string;
}

const StatesCard = ({ indicator, title, color }: StatestProps) => {
    return (
        <div className="flex items-center rounded-lg p-4 border border-gray-300 w-full">
            <div className={`w-4 h-4 rounded-full ${color} mr-2`}></div>
            <div className="flex-1">
                <span>{indicator}/100</span>
            </div>
            <div className="flex-1 text-center">
                <span>{title}</span>
            </div>
        </div>
    );
};

export default StatesCard;