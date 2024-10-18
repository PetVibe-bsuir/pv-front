interface StatestProps {
    indicator: number;
    color: string;
    lucideImg: JSX.Element;
}

const StatesCard = ({ indicator, color, lucideImg }: StatestProps) => {
    const clampedIndicator = Math.max(0, Math.min(indicator, 100));

    return (
        <div className="flex justify-between items-center rounded-lg p-4 w-full">
            <div className={`w-4 h-4 rounded-full ${color} mr-2`}></div>

            <div className="flex-1 relative h-8 rounded-md min-w-64 overflow-hidden bg-gray-300">
                <div
                    className={`absolute left-0 top-0 h-full ${color}`}
                    style={{ width: `${clampedIndicator}%` }}
                ></div>
                <span
                    className="text-black font-bold text-center absolute inset-0 flex items-center justify-center"
                    style={{ zIndex: 1 }}
                >
                    {indicator}/100
                </span>
            </div>
            <div className="ml-3.5">
                {lucideImg}
            </div>
        </div>
    );
};

export default StatesCard;