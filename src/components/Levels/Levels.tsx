import { FC, useState } from "react";
import ProgressBar from "./LevelsProgressBar";
import LevelModal from "./LevelsModals";

type Props = {
    location: string;
};

const Levels:FC<Props> = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const currentLevel = 52;
    const currentExperience = 76; // Текущий опыт
    const totalExperience = 100; // Общий опыт для следующего уровня

    return (
        <div className="px-3 rounded-md">

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

export default Levels;