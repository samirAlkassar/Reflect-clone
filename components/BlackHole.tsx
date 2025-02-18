
import { Orbit } from "./icons/orbit";
import SkyStars from "./icons/skystars";
import { StarsAnimation } from "./StarsAnimation";

export const BlackHole = () => {
    return (
        <div className="absolute lg:top-[50%] top-[-25%] left-[50%] translate-x-[-50%] lg:translate-y-[-88%] w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] z-[4] mx-auto overflow-hidden">
            <StarsAnimation />

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[3] bg-orbits-gradient"></div>

            {/* Black hole */}
            <div className="absolute inset-0 m-auto w-full h-full bg-black-hole z-[2]"></div>

            {/* Background elements */}
            <SkyStars className="absolute inset-0 m-auto w-full h-full object-cover opacity-50 z-[1] animate-black-hole-orbits-animation2" />
            <Orbit className="absolute inset-0 m-auto w-[40vw] max-w-[400px] h-[40vw] max-h-[400px] object-cover z-[1]" />
            <Orbit className="absolute inset-0 m-auto w-[60vw] max-w-[600px] h-[60vw] max-h-[600px] object-cover animate-black-hole-orbits-animation1 z-[1] opacity-80" />
            <Orbit className="absolute inset-0 m-auto w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] object-cover animate-black-hole-orbits-animation2 z-[1] opacity-50" />
        </div>
    );
};

