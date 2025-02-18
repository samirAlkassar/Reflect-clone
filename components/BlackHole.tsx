
import { Orbit } from "./icons/orbit";
import SkyStars from "./icons/skystars";
import { StarsAnimation } from "./StarsAnimation";

export const BlackHole = () => {

    return (
        <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[900px] h-[900px] z-[4] mx-auto mt-[120px] overflow-hidden">
            <StarsAnimation />
            

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[3] bg-orbits-gradient"></div>
            
            {/* Black hole */}
            <div className="absolute inset-0 m-auto w-[900px] h-[900px] bg-black-hole z-[2]"></div>
            
            {/* Background elements */}
            <SkyStars className="absolute inset-0 m-auto w-[900px] h-[900px] object-cover opacity-50 z-[1] animate-black-hole-orbits-animation2" />
            <Orbit className="absolute inset-0 m-auto w-[400px] h-[400px] object-cover z-[1]" />
            <Orbit className="absolute inset-0 m-auto w-[600px] h-[600px] object-cover animate-black-hole-orbits-animation1 z-[1] opacity-80" />
            <Orbit className="absolute inset-0 m-auto w-[900px] h-[900px] object-cover animate-black-hole-orbits-animation2 z-[1] opacity-50" />
        </div>
    );
};
