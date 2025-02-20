import { Orbit } from "./icons/orbit";
import SkyStars from "./icons/skystars";
import { StarsAnimation } from "./StarsAnimation";

export const BlackHole = () => {
    return (
        <div className="absolute lg:top-[50%] top-[-25%] left-[50%] translate-x-[-50%] lg:translate-y-[-88%] w-[100vw] max-w-[1450px] h-[90vw] max-h-[900px] z-[4] mx-auto overflow-hidden">
            <StarsAnimation />

            <div className="absolute inset-0 z-[3] bg-orbits-gradient"></div>

            <div className="absolute inset-0 m-auto w-full h-full  z-[-2]">
                <video src="/blackhole.webm" autoPlay muted loop className="w-full h-full object-fit"></video>
            </div>

            <SkyStars className="absolute inset-0 m-auto w-full h-full object-cover opacity-50 z-[1] animate-sky-stars-spin" />
            <Orbit className=" text-white absolute inset-0 m-auto w-[40vw] max-w-[400px] h-[40vw] max-h-[400px] object-cover z-[1]" />
            <Orbit
                style={{ "--rotation-speed": "140s" } as React.CSSProperties}
                className="absolute inset-0 m-auto w-[60vw] text-orbit-stroke max-w-[600px] h-[60vw] max-h-[600px] object-cover animate-black-hole-orbits-animation z-[1] opacity-80" />
            <Orbit
                style={{ "--rotation-speed": "340s" } as React.CSSProperties}
                className="absolute inset-0 m-auto w-[90vw] max-w-[900px] text-orbit-stroke h-[90vw] max-h-[900px] object-cover animate-black-hole-orbits-animation z-[1] opacity-50" />
        </div>
    );
};

