
interface LevelModalProps {
    onClose: () => void;
    currentLevel: number;
}

export default function LevelModal({ onClose, currentLevel }: LevelModalProps) {
    const levels = [50, 51, 52, 53]; 

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-200 p-6 rounded shadow-lg">
                <button onClick={onClose} className="absolute top-2 right-2">✖</button>
                <div className="flex flex-col items-center">
                    {levels.map(level => (
                        <div key={level} className={`flex mt-2 items-center ${level === currentLevel ? 'text-yellow-500' : 'text-gray-500'}`}>
                            <div className={`border-2 rounded-full w-8 h-8 flex items-center justify-center ${level === currentLevel ? 'bg-yellow-500 border-yellow-500 text-gray-500' : 'bg-gray-300 border-gray-400'}`}>
                                {level}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}