import Image from "next/image";
import React, { memo } from "react";
import Status from "./Status";
import MainButton from "@/components/Buttons";
import SectionHeroImage from "./SectionHeroImage";
import Link from "next/link";

interface SectionHeroProps {
  className?: string;
}

const SectionHero = memo(({ className = "" }: SectionHeroProps) => {
  return (
    <section
      className={`flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-10 pt-5 items-center bg-black-light w-full bg-cover bg-[url('https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338ea7_hero_background-pattern.webp')] bg-center bg-no-repeat overflow-hidden ${className}`}
      aria-label="Hero Section"
    >
      <div className="flex flex-col gap-6 sm:gap-8 items-center max-w-7xl mx-auto w-full">
        <div
          className="flex items-center gap-2 p-[2px] pr-3 bg-black-light border-white border-2 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300"
          role="status"
          aria-label="Rating"
        >
          <span className="bg-black rounded-full text-[rgb(239,255,248)] font-clash px-2 py-[6px] text-[12px] lg:text-[16px] font-semibold">
            Rated 4.8/5
          </span>
          <span className="text-[12px] sm:text-[16px] font-medium text-black">
            from over 100K+ customers
          </span>
        </div>
        <div className="flex flex-col gap-4 font-satoshi text-black items-center">
          <h1 className="font-h-main md:font-h-md lg:font-h-lg lg:w-[70%] text-center">
            <span className="animate-fade-in">Buy Followers, Likes </span>
            <Image
              width={46}
              height={46}
              alt="Thumbs up emoji"
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e3c_hero_thumb-img.svg"
              loading="eager"
              className="inline-block w-auto h-auto animated-image animate-bounce-slow"
              priority
            />
            <span className="animate-fade-in"> , Subscribers, Views & </span>
            <span className="text-green-light animate-fade-in">
              Grow Exponentially{" "}
            </span>
            <Image
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/676522ff439c1d92501b3b6e_Graph%20PNG-p-500.png"
              alt="Uptrend chart"
              loading="eager"
              width={500}
              height={500}
              className="inline-block w-[50px] h-[50px] animate-pulse-slow"
              priority
            />
          </h1>
          <div className="text-black text-[14px] md:text-[18px] leading-[27px] font-medium text-center w-[90%] sm:w-[80%] lg:w-[50%] font-satoshi animate-fade-in-up">
            Helping brands and influencers build social proof through innovative
            social media services
          </div>
        </div>
        <div className="grid grid-cols-auto-2 lg:grid-cols-auto-3 gap-4 sm:gap-6 items-center w-full">
          <div className="flex gap-[6px] order-2 lg:order-1 items-center justify-center text-center animate-fade-in-left">
            <Image
              width={20}
              height={20}
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e3e_UsersFour.svg"
              alt="Users icon"
              className="w-auto h-auto"
              priority
            />
            <span className="text-black font-satoshi text-[14px] font-medium">
              1.5B+ People Reached
            </span>
          </div>
          <div className="order-1 lg:order-2 col-span-2 lg:col-span-1 flex h-fit items-center gap-5 animate-fade-in-up">
            <div className="hidden lg:block bg-black-dark w-[1px] h-10" />
            <Status />
            <div className="hidden lg:block bg-black-dark w-[1px] h-10" />
          </div>
          <div className="flex order-3 gap-[6px] items-center justify-center text-center animate-fade-in-right">
            <Image
              width={20}
              height={20}
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e3f_Cursor.svg"
              alt="Cursor icon"
              className="w-auto h-auto"
              priority
            />
            <span className="text-black font-satoshi text-[14px] font-medium">
              5M+ Monthly Clicks
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up">
          <Link
            href={"#services-list"}
            scroll={true}
            aria-label="View all services"
          >
            <MainButton type="primary" title="View All Services" />
          </Link>
          <MainButton type="white-main" title="Client Portal" />
        </div>
      </div>
      <SectionHeroImage />
    </section>
  );
});

SectionHero.displayName = "SectionHero";

export default SectionHero;
