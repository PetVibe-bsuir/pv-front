interface ProgressBarProps {
    currentLevel: number;
    currentExperience: number;
    totalExperience: number;
    onOpenModal: () => void;
}

export default function LevelsProgressBar({ currentLevel, currentExperience, totalExperience, onOpenModal }: ProgressBarProps) {
    const progress = ((currentExperience / totalExperience) * 100).toFixed(0);

    return (
        <div className="flex items-center">
            <div className="relative w-full h-4 bg-gray-300 rounded">
                <div className="absolute top-0 left-0 h-full bg-yellow-500" style={{ width: `${progress}%` }}></div>
            </div>
            <div 
                className="ml-2 cursor-pointer text-yellow-500" 
                onClick={onOpenModal}
            >
                {currentLevel}
            </div>
        </div>
    );
}