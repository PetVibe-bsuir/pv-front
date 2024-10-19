interface ProgressBarProps {
    currentLevel: number;
    currentExperience: number;
    totalExperience: number;
    onOpenModal: () => void;
}

export default function LevelsProgressBar({ currentLevel, currentExperience, totalExperience, onOpenModal }: ProgressBarProps) {
    const progress = ((currentExperience / totalExperience) * 100).toFixed(0);

    return (
        <div className="relative w-full h-4 bg-gray-300 rounded">
            <div className="absolute top-0 left-0 h-full bg-yellow-500" style={{ width: `${progress}%` }}></div>
            <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer text-white font-bold"
                onClick={onOpenModal}
            >
                {currentLevel}
            </div>
        </div>
    );
}