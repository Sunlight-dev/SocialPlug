"use client";
import MainButton from "@/components/Buttons";
import { CloseIcon, SearchIcon } from "@/libs/consts/MySvg";
import { useHome } from "@/providers/HomeProvider";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { memo, useState } from "react";

interface LanguageOption {
  code: string;
  flag: string;
  name: string;
}

const languages: LanguageOption[] = [
  {
    code: "en",
    flag: "https://cdn.weglot.com/flags/square/us.svg",
    name: "English",
  },
  {
    code: "es",
    flag: "https://cdn.weglot.com/flags/square/es.svg",
    name: "Español",
  },
];

interface NavBarMainProps {
  className?: string;
}

const NavBarMain = memo(({ className = "" }: NavBarMainProps) => {
  const [searchShow, setSearchShow] = useState(false);
  const { serviceShow, setServiceShow } = useHome();

  return (
    <div
      className={`
      w-full
      transition-all duration-300
      ${className}
    `}
    >
      <div className="py-2 flex flex-col items-center w-full bg-white">
        <div className="max-w-[1366px] w-full flex items-center justify-between px-4 md:px-10">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              width={164}
              height={32}
              alt="logo"
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e86_navbar-logo.svg"
              className="w-[123px] h-[24px] md:w-[164px] md:h-[32px] mr-4 md:mr-10"
            />
          </Link>
          <div className="flex items-center gap-2 lg:grow">
            <div
              className="
              rounded-lg gap-3 
              flex items-center 
              border border-black-normal
              p-3 grow 
              bg-black-light
              transition-all duration-300
              hover:border-primary
              focus-within:border-primary
              focus-within:shadow-soft
            "
            >
              <div className="lg:flex hidden text-text-secondary">
                {SearchIcon}
              </div>
              <button
                onClick={() => setSearchShow(!searchShow)}
                className="lg:hidden text-text-secondary hover:text-primary transition-colors"
              >
                {SearchIcon}
              </button>
              <input
                type="text"
                className="
                  hidden lg:flex 
                  bg-transparent 
                  text-base text-text-primary
                  border-none grow
                  placeholder:text-text-light
                  focus:outline-none
                "
                placeholder="Search"
              />
            </div>
            <div className="w-px h-[50px] bg-gradient-to-b from-transparent via-black-normal to-transparent" />
            <MainButton
              type="white-main"
              title="Login"
              handleClick={() => redirect("/login")}
            />
            <Link
              href="/home/services"
              className="lg:block hidden animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <MainButton type="primary" title="All Services" />
            </Link>
            <div
              className="
              inline-block group 
              w-[62px] h-[40px] 
              bg-white relative 
              transition-all duration-300
              hover:shadow-soft
            "
            >
              <Link
                href="#"
                className="
                  w-[62px] h-[40px] 
                  gap-1 flex items-center px-2
                  transition-colors duration-300
                  hover:text-primary
                "
              >
                <Image
                  src={languages[0].flag}
                  width={28}
                  height={21}
                  alt={`${languages[0].name} flag`}
                  className="object-cover rounded-sm w-[28px] h-[21px]"
                />
                <Image
                  width={16}
                  height={16}
                  alt="down"
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e87_nav_dd-icon.svg"
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>
              <div
                className="
                absolute hidden z-10 
                group-hover:block 
                bg-white 
                w-[62px] h-[30px] 
                rounded-lg px-2 
                shadow-soft
                animate-fade-in
              "
              >
                {languages.slice(1).map((lang) => (
                  <Link
                    key={lang.code}
                    href="#"
                    className="
                      flex items-center gap-1
                      transition-colors duration-300
                      hover:text-primary
                    "
                  >
                    <Image
                      src={lang.flag}
                      width={28}
                      height={21}
                      alt={`${lang.name} flag`}
                      className="object-cover rounded-sm w-[28px] h-[21px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <button
              onClick={() => setServiceShow(!serviceShow)}
              className="
                lg:hidden 
                rounded-lg gap-3 
                flex items-center 
                border border-black-normal
                p-3 
                transition-all duration-300
                hover:border-primary
                hover:shadow-soft
              "
            >
              <Image
                width={19}
                height={15}
                loading="lazy"
                alt="Menu"
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e9a_nav-ham-icon.svg"
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`
          ${searchShow ? "block" : "hidden"}
          rounded-lg gap-3 
          flex items-center 
          border border-black-normal
          bg-black-light 
          mb-2 mx-4 md:mx-10 p-3
          animate-fade-in
          transition-all duration-300
          hover:border-primary
          focus-within:border-primary
          focus-within:shadow-soft
        `}
      >
        <div className="text-text-secondary">{SearchIcon}</div>
        <input
          type="text"
          className="
            lg:hidden 
            bg-transparent 
            text-base text-text-primary
            border-none grow
            placeholder:text-text-light
            focus:outline-none
          "
          placeholder="Search"
        />
        <button
          onClick={() => setSearchShow(false)}
          className="
            text-text-secondary
            hover:text-primary
            transition-colors
          "
        >
          {CloseIcon}
        </button>
      </div>
    </div>
  );
});

NavBarMain.displayName = "NavBarMain";

export default NavBarMain;
