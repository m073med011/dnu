// import Image from "next/image";
import UniversityPage from "@/components/home/page";
import UniversityFaculties from "@/components/home/UniversityFaculties";
import ImageSction from "@/components/home/image";
import UniversityNews from "@/components/home/UniversityNews";
import ArabicFAQ from "@/components/home/ArabicFAQ";
export default function Home() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <UniversityPage />
      <UniversityFaculties />
      <ImageSction/> 
      <UniversityNews/>
      <ArabicFAQ/>
    </div>
  );
}
