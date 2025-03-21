import Image from "next/image";
import React, { memo } from "react";
import Status from "./Status";
import MainButton from "@/components/Buttons";
import SectionHeroImage from "./SectionHeroImage";
import Link from "next/link";
import { useTranslations } from "next-intl";
interface SectionHeroProps {
  className?: string;
}

const SectionHero = memo(({ className = "" }: SectionHeroProps) => {
  const t = useTranslations("Home");
  return (
    <section
      className={`flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-10 pt-5 items-center bg-black-light w-full bg-cover bg-[url('https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338ea7_hero_background-pattern.webp')] bg-center bg-no-repeat overflow-hidden ${className}`}
    >
      <div className="flex flex-col gap-6 sm:gap-8 items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 p-[2px] pr-3 bg-black-light border-white border-2 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300">
          <span className="bg-black rounded-full text-[rgb(239,255,248)] font-clash px-2 py-[6px] text-[12px] lg:text-[16px] font-semibold">
            {t("hero.rated")}
          </span>
          <span className="text-[12px] sm:text-[16px] font-medium text-black">
            {t("hero.from")}
          </span>
        </div>
        <div className="flex flex-col gap-4 font-satoshi text-black items-center">
          <h1 className="font-h lg:w-[70%] text-center">
            <span>{t("hero.title_1")} </span>
            <Image
              width={46}
              height={46}
              alt="Thumbs up emoji"
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e3c_hero_thumb-img.svg"
              loading="eager"
              className="inline-block w-auto h-auto animated-image animate-bounce-slow"
              priority
            />
            <span> , {t("hero.title_2")} </span>
            <span className="text-primary animate-fade-in">
              {t("hero.title_3")}
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
            {t("hero.description")}
          </div>
        </div>
        <div className="grid grid-cols-auto-2 lg:flex lg:flex-row gap-4 sm:gap-6 items-center">
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
              {t("hero.users")}
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
              {t("hero.cursor")}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up">
          <Link
            href={"#services-list"}
            scroll={true}
            aria-label={t("hero.view_all_services")}
          >
            <MainButton type="primary" title={t("hero.view_all_services")} />
          </Link>
          <MainButton type="white-main" title={t("hero.client_portal")} />
        </div>
      </div>
      <SectionHeroImage />
    </section>
  );
});

SectionHero.displayName = "SectionHero";

export default SectionHero;
