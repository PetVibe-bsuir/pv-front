import StatesCard from "@/components/ui/statesCard.tsx";

const States = () => {
    return (
        <div className="flex flex-col justify-between items-center gap-3.5">
            <StatesCard indicator={32} title="здоровье" color="bg-cyan-500" />
            <StatesCard indicator={100} title="комфорт" color="bg-purple-500" />
            <StatesCard indicator={0} title="энергия" color="bg-yellow-500" />
        </div>
    );
};

export default States;