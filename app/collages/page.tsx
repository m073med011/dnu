import BgPage from "@/public/collages/BgPage.png";
import Image from "next/image";
import FacultiesSection from "@/components/collages/FacultiesSection";

const page = () => {
  return (
    <main className="w-full h-full">
      {/* Hero Section */}
      <section
        className="relative w-full flex items-center justify-center text-black font-bold group overflow-hidden"
        style={{ height: "clamp(297.80px, 25.47vw, 366.75px)" }}
      >
        {/* Gradient Overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-white to-white/0 transition-all duration-500 group-hover:h-2/3" />

        <Image
          src={BgPage}
          alt="Background"
          layout="fill"
          className="z-0 transition-transform duration-700 group-hover:scale-105"
          priority
        />

        <div className="w-full z-20 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gradient-primary font-inter font-bold break-words transition-all duration-500 group-hover:translate-y-[-4px] group-hover:drop-shadow-lg">
          كليات الجامعة و البرامج
        </div>
      </section>
      <div className="transition-all duration-300 hover:translate-y-[-2px]">
        <FacultiesSection />
      </div>
    </main>
  );
};

export default page;