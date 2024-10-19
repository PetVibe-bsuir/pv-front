import { useState } from "react";
import ProgressBar from "./LevelsProgressBar";
import LevelModal from "./LevelsModals";

export default function Levels() {
    const [isModalOpen, setModalOpen] = useState(false);
    const currentLevel = 52;
    const currentExperience = 53; // Текущий опыт
    const totalExperience = 100; // Общий опыт для следующего уровня

    return (
        <div>
            <ProgressBar 
                currentLevel={currentLevel} 
                currentExperience={currentExperience} 
                totalExperience={totalExperience}
                onOpenModal={() => setModalOpen(true)}
            />
            {isModalOpen && (
                <LevelModal onClose={() => setModalOpen(false)} currentLevel={currentLevel} />
            )}
        </div>
    );
}