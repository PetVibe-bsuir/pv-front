import type { ReactNode } from "react";

interface StatestProps {
    indicator: number;
    color: string;
    lucideImg: ReactNode;
}

const StatesCard = ({ indicator, color, lucideImg }: StatestProps) => {
    const clampedIndicator = Math.max(0, Math.min(indicator, 100));

    return (
        <div className="flex w-full items-center justify-between rounded-lg p-2 px-4">
            <div className={`h-4 w-4 rounded-full ${color} mr-2`}></div>

            <div className="relative h-8 min-w-64 flex-1 overflow-hidden rounded-md bg-gray-300">
                <div
                    className={`absolute left-0 top-0 h-full ${color}`}
                    style={{ width: `${clampedIndicator}%` }}
                ></div>
                <span
                    className="absolute inset-0 flex items-center justify-center text-center font-bold text-black"
                    style={{ zIndex: 1 }}
                >
                    {indicator}/100
                </span>
            </div>
            <div className="ml-3.5">{lucideImg}</div>
        </div>
    );
};

export default StatesCard;
