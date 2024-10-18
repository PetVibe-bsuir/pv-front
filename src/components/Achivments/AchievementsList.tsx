import AchivmentsCard from "@/components/Achivments/AchivmentsCard.tsx";
import type {TAchivment} from "@/api";

const cardData: TAchivment[] = [
    {icon: '../../se', exp: 10000, name: 'Genius'},
    {icon: '../../se', exp: 10000, name: 'Genius'},
    {icon: '../../se', exp: 10000, name: 'Genius'},
    {icon: '../../se', exp: 10000, name: 'Genius'},
    {icon: '../../se', exp: 10000, name: 'Genius'},
]

const AchievementsList = () => {
    return (
        <div className="flex items-center justify-between w-full gap-1.5">
            {cardData.map(card => (
                <AchivmentsCard key={card.id} {...card} />
            ))}
        </div>
    );
};

export default AchievementsList;