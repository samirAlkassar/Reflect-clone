import { Button } from "../components/Button";
import { Stars } from "../components/icons/stars";
import { BlackHole } from "../components/BlackHole";
import Image from "next/image";
import { VideoPlay } from "../components/icons/videoPlay";
import classNames from "classnames";

export const Hero = () => {
  return (
    <section className={classNames("flex items-center flex-col mt-[173px]",
        "before:absolute before:lg:left-[50%] before:left-0 before:lg:top-[-172px] before:top-0 before:translate-x-[-50%] before:lg:w-[1440px] before:w-[100vw] before:h-[900px] before:pointer-events-none before:z-[10] lg:before:bg-hero-gradient before:bg-hero-gradient-mobile"
    )}>
      <Button className="mb-7 z-30 pr-[13px]" variant="secondary" size="small">
        <Stars className="mr-2" />
        Take notes using AI
      </Button>
      <h1 className="text-4xl lg:text-6xl font-semibold text-gradient z-30">
        Think better
        <br className="lg:hidden block" /> with Reflect
      </h1>
      <p className="text-primary-subtext text-md mt-3 z-30">
        Never miss a note, idea or connection.
      </p>

      <div className="relative lg:mt-[232px] mt-[220px]">
        <BlackHole />
        <div className="absolute inset-0 bg-heroImage-gradient z-20" />
        <div className="relative z-10 p-3 bg-white bg-opacity-[0.02] border border-white border-opacity-[0.05] rounded-[24px]">
            <Image
            src="/home-image.png"
            alt="Hero Image"
            width={1216}
            height={766}
            className="relative z-10 backdrop-blur-[15px] lg:w-[1200px] w-[350px] h-[680px]"
            />
        </div>
        <div className={classNames("flex absolute animate-playbutton-animation hover:scale-[1.0714] active:scale-[1] transition-all duration-300 [&_div]:hover:scale-[1.2]",
                "top-[50%] right-[50%] translate-x-[50%] translate-y-[-110%] items-center justify-center z-50",
                "bg-white bg-opacity-[0.02] p-6 w-[112px] h-[112px] rounded-full border border-white border-opacity-[0.05]")}>
          <div className={classNames("bg-hero-playbutton-gradient border border-offwhite w-[80px] h-[80px]",
                "rounded-full flex items-center justify-center backdrop-blur-[12px] cursor-pointer transition-all ease-out duration-75")}>
            <VideoPlay className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
