import Image from "next/image";
import BgPage from "@/public/home/backgrounds/background1.jpg";

interface PageProps {
  title: string;
  content: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, content }) => {
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

        <div
          className="w-full text-center text-[#433E78] font-bold transition-all duration-500 absolute z-20"
          style={{
            fontSize: "clamp(1.5rem, 3.8vw,3.8vw)", // This will set the font size using clamp for responsive scaling
            fontFamily: "Cairo",
            bottom: "clamp(70px, 10vw, 200px)", // Responsive clamp for bottom position
            wordWrap: "break-word",
          }}
        >
          {title}
        </div>
      </section>

      <div className="w-full relative lg:-top-[7vw] -top-[12vw] ">
        {content}
      </div>
    </main>
  );
};

export default Page;
