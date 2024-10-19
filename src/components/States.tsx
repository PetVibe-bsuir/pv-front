import StatesCard from "@/components/ui/statesCard.tsx";
import { HeartPulse, Heater, Zap } from "lucide-react";

const States = () => {
    const heartPulseSvg = <HeartPulse />;

    const comfortSvg = <Heater />;

    const activeSvg = <Zap />;

    return (
        <div className="mt-3 flex flex-col items-center justify-between gap-1">
            <StatesCard indicator={90} color="bg-cyan-500" lucideImg={heartPulseSvg} />
            <StatesCard indicator={100} color="bg-purple-500" lucideImg={comfortSvg} />
            <StatesCard indicator={90} color="bg-yellow-500" lucideImg={activeSvg} />
        </div>
    );
};

export default States;
