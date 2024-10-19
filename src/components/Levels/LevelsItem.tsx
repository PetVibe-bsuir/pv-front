import { useState } from "react";

interface LevelItemProps {
    level: number;
    isCurrent: boolean;
    currentExperience: number;
    totalExperience: number;
}

export default function LevelItem({ level, isCurrent, currentExperience, totalExperience }: LevelItemProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    const progress = ((currentExperience / totalExperience) * 100).toFixed(0);

    return (
        <div className="relative mb-4">
            <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${isCurrent ? 'bg-yellow-500 border-yellow-500' : 'bg-gray-300 border-gray-400'}`}
                onClick={() => setShowTooltip(!showTooltip)}
            >
                {level}
            </div>
            {isCurrent && (
                <div className="absolute top-0 left-10">
                    <div className="p-2 bg-white border rounded shadow">
                        <p>Текущий уровень: {level}</p>
                        <p>Опыт: {currentExperience}/{totalExperience}</p>
                        <p>Прогресс: {progress}%</p>
                    </div>
                </div>
            )}
            {isCurrent && (
                <div className="relative w-full h-1 bg-gray-300 mt-2">
                    <div className="absolute top-0 left-0 h-full bg-yellow-500" style={{ width: `${progress}%` }}></div>
                </div>
            )}
        </div>
    );
}