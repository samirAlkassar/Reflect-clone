import { Button } from "../components/Button"
import { Stars } from "../components/icons/stars"
import { BlackHole } from "../components/BlackHole"

export const Hero = () => {
    return (
        <section className="flex items-center flex-col mt-[173px]">
            <Button className="mb-7 z-30 pr-[13px]" variant="secondary" size="small">
                <Stars className="mr-2" />
                Take notes using AI
            </Button>
            <h1 className="text-4xl lg:text-6xl font-semibold text-gradient z-30">Think better 
                <br className="lg:hidden block" /> with Reflect</h1>
            <p className="text-primary-subtext text-md mt-3 z-30">Never miss a note, idea or connection.</p>

            <BlackHole />

            <div className="relative lg:mt-[232px] mt-[220px]">
                <div className="absolute inset-0 bg-heroImage-gradient z-20" />
                <img
                    src="/home-image.png"
                    alt="Hero Image"
                    className="relative z-10 backdrop-blur-[25px] lg:w-[1200px] w-[350px] h-[680px]"
                />
            </div>
        </section>
    )
}
