// import Image from "next/image";
import UniversityPage from "@/components/home/page";
// import UniversityFaculties from "@/components/home/UniversityFaculties";
// import ImageSction from "@/components/home/image";
import UniversityNews from "@/components/home/UniversityNews";
import ArabicFAQ from "@/components/home/ArabicFAQ";
import UniversityInfo from "@/components/home/UniversityInfo";
import Priceing from "@/components/home/Priceing";

export default function Home() {
  return (
    <div className=" w-full mx-auto">
      <UniversityPage />
      {/* <UniversityFaculties /> */}
      {/* <ImageSction /> */}
      <UniversityInfo/>
      <UniversityNews />
      <Priceing />
      <ArabicFAQ />
    </div>
  );
}
