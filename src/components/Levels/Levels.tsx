import LevelsList from "./LevelsList";

export default function Levels() {
    const currentLevel = 52;
    const currentExperience = 53;
    const totalExperience = 100;

    return (
        <div>
            <LevelsList
                currentLevel={currentLevel}
                currentExperience={currentExperience}
                totalExperience={totalExperience}
            />
        </div>
    );
}