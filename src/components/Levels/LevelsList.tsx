import LevelItem from "./LevelsItem";

interface LevelsListProps {
    currentLevel: number;
    currentExperience: number;
    totalExperience: number;
}

export default function LevelsList({ currentLevel, currentExperience, totalExperience }: LevelsListProps) {
    const levels = [50, 51, 52, 53]; 

    return (
        <div className="flex flex-col items-center">
            {levels.map(level => (
                <LevelItem
                    key={level}
                    level={level}
                    isCurrent={level === currentLevel}
                    currentExperience={currentExperience}
                    totalExperience={totalExperience}
                />
            ))}
        </div>
    );
}