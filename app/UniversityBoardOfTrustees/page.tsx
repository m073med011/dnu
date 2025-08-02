// import BgPage from "@/public/collages/BgPage.png";
import image from "@/public/trustees_image.jpeg";
import Image from "next/image";
import React from "react";
import Page from "@/components/Hero-section"; // Import your reusable Page component

// Profile data array
const profileData = [
  {
    id: 1,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 2,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 3,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 4,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 5,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 6,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 7,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 8,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 9,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
];

// Two featured profiles data
const featuredProfiles = [
  {
    id: 1,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
  {
    id: 2,
    name: "أ.د/ السيد أحمد أحمد عبد الخالق",
    title: "ووزير التعليم العالي الأسبق",
    image: image,
  },
];

// Reusable ProfileCard component with improved responsive design
const ProfileCard: React.FC<{
  profile: (typeof profileData)[0];
  className?: string;
}> = ({ profile }) => (
  <div className="bg-white rounded-2xl mx-auto border border-[#677AE4] flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 transition-all duration-300 hover:scale-105 hover:border-[#754FA8] group p-3 sm:p-4 w-full max-w-[280px] min-h-[300px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[380px]">
    {/* Image container with responsive dimensions */}
    <div className="relative overflow-hidden rounded-2xl w-full aspect-square max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px]">
      <Image
        src={profile.image}
        alt={profile.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 240px, 260px"
      />
    </div>
    
    {/* Text content */}
    <div className="flex flex-col justify-center items-center gap-1 sm:gap-2 text-center px-2 sm:px-3 mt-2">
      <div className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-inter font-medium break-words transition-colors duration-300 group-hover:text-[#677AE4] leading-tight">
        {profile.name}
      </div>
      <div className="text-black/60 text-xs sm:text-sm md:text-base font-inter font-medium break-words leading-tight">
        {profile.title}
      </div>
    </div>
  </div>
);

// Reusable FeaturedProfileCard component with improved responsive design
const FeaturedProfileCard: React.FC<{
  profile: (typeof featuredProfiles)[0];
}> = ({ profile }) => (
  <div className="p-4 sm:p-5 md:p-6 bg-gray-50 rounded-2xl flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 transition-all duration-300 hover:scale-105 hover:bg-white group w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
    <div className="w-full overflow-hidden rounded-2xl">
      <Image
        src={profile.image}
        alt={profile.name}
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
    <div className="w-full flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4">
      <div className="w-full text-center text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-inter font-bold break-words transition-colors duration-300 group-hover:text-[#677AE4] leading-tight">
        {profile.name}
      </div>
      <div className="text-center text-black/60 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter font-medium break-words leading-tight">
        {profile.title}
      </div>
    </div>
  </div>
);

// Improved responsive ProfileCardsDiv component
const ProfileCardsDiv: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
        {profileData.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

const ProfileTwoCardsDiv: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 md:mb-12">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        {featuredProfiles.map((profile) => (
          <FeaturedProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

const TrusteesPage = () => {
  // Define the content that will be passed to the Page component
  const pageContent = (
    <>
      {/* Featured Profiles Section */}
      <ProfileTwoCardsDiv />

      {/* Section Divider */}
      <section className="w-full py-4 sm:py-6 md:py-8 mb-8 sm:mb-10 md:mb-12">
        <div className="w-full h-full py-4 sm:py-6 md:py-8 lg:py-10 bg-gradient-to-r from-[#899FCF] to-[#433E78] flex justify-center items-center">
          <div className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-inter font-bold break-words px-4">
            مجلس أمناء الجامعة
          </div>
        </div>
      </section>

      {/* Profile Cards Section */}
      <ProfileCardsDiv />
    </>
  );

  return (
    <Page 
      title="مجلس الأمناء" 
      content={pageContent} 
    />
  );
};

export default TrusteesPage;