import BgPage from "@/public/home/Background.jpg";
import Image from "next/image";
import FacultiesSection from "@/components/collages/FacultiesSection";

const page = () => {
  return (
    <main className="w-full h-full">
      {/* Hero Section */}
      <section
        className="relative lg:-top-[7vw] -top-[12vw] w-full flex items-center justify-center text-black font-bold group overflow-hidden"
        style={{ height: "clamp(297.80px, 35.47vw,35.47vw)" }}
      >
        {/* Gradient Overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 z-10 bg-gradient-to-t from-white to-white/0 transition-all duration-500 group-hover:h-2/3" />

        <Image
          src={BgPage}
          alt="Background"
          layout="fill"
          className="z-0 transition-transform duration-700 group-hover:scale-105"
          priority
        />

        <div className="w-full text-[#433E78] bottom-[clamp(100px,10vw,200px)] absolute z-20 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-bold  transition-all duration-500 group-hover:translate-y-[-4px] ">
          كليات الجامعة و البرامج
        </div>
      </section>
      <div className="relative lg:-top-[7vw] -top-[12vw]">
        <FacultiesSection />
      </div>
    </main>
  );
};

export default page;
