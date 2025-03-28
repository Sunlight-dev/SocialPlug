"use client";
import MainButton from "@/components/Buttons";
import { CloseIcon, SearchIcon } from "@/libs/consts/MySvg";
import { useHome } from "@/providers/HomeProvider";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { useList } from "@/providers/ListProvider";
import { generate_slug } from "@/utils/functions";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

const NavBarMain = memo(() => {
  const [searchShow, setSearchShow] = useState(false);
  const { serviceShow, setServiceShow } = useHome();
  const { serviceList } = useList();
  const [searchService, setSearchService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("Navbar");
  const handleInputFocus = () => {
    setIsDropdownOpen(true);
    if (searchService.length > 1) {
    }
  };
  const removeSearch = () => {
    setSearchService("");
  };
  return (
    <div className="w-full transition-all duration-300">
      <div className="py-2 flex flex-col items-center w-full bg-white">
        <div className="max-w-[1366px] w-full flex items-center justify-between px-4 md:px-10">
          <Link
            href="/"
            aria-label="Home"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              width={164}
              height={32}
              priority
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
              focus-within:shadow-soft relative
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
                value={searchService}
                onFocus={handleInputFocus}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                onChange={(e) => setSearchService(e.target.value)}
                placeholder="Search"
              />
              {isDropdownOpen && (
                <div className="max-lg:hidden top-full left-[0px] right-[0px] bg-white border border-[#ddd] rounded-[12px] border-t-0 absolute z-[100] p-4 block mt-1">
                  <h2 className="text-[20px] font-semibold text-[#363636] mb-2 leading-[1] font-clash">
                    {searchService.length > 1
                      ? "Search Results"
                      : "Recommended Services"}
                  </h2>
                  <div className="grid grid-cols-3 gap-3 font-satoshi font-semibold">
                    {searchService.length > 1
                      ? serviceList.data_2.map((serivce) =>
                          serivce.services.map((subservice) =>
                            subservice.name
                              .toLowerCase()
                              .includes(searchService.toLowerCase()) ? (
                              <div key={subservice.id} onClick={removeSearch}>
                                <Link
                                  className="flex px-2 py-1 text-base text-text-primary font-medium font-satoshi hover:bg-background-light hover:text-primary transition-all duration-300"
                                  href={`/services/${generate_slug(
                                    subservice.name
                                  )}`}
                                  aria-label={subservice.name}
                                >
                                  {subservice.name}
                                </Link>
                              </div>
                            ) : null
                          )
                        )
                      : serviceList.data_3.slice(0, 27).map((subservice) => (
                          <div key={subservice.id} onClick={removeSearch}>
                            <Link
                              className="flex px-2 py-1 text-base text-text-primary font-medium font-satoshi hover:bg-background-light hover:text-primary transition-all duration-300"
                              href={`/services/${generate_slug(
                                subservice.name
                              )}`}
                              aria-label={subservice.name}
                            >
                              {subservice.name}
                            </Link>
                          </div>
                        ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-[50px] bg-gradient-to-b from-transparent via-black-normal to-transparent" />
            <Link href="https://panel.socialplug.io/" aria-label="Login">
              <MainButton type="white-main" title={t("main.login")} />
            </Link>
            <Link
              href="/services/"
              className="lg:block hidden"
              aria-label="All Services"
            >
              <MainButton
                type="primary"
                title={t("main.all_services")}
                customChildClass="!bg-none !bg-primary"
              />
            </Link>
            <LocaleSwitcher />
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
                priority
                alt="Menu"
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e9a_nav-ham-icon.svg"
                className="w-[19px] h-[15px]"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`
          ${searchShow ? "block" : "hidden"}
          lg:hidden
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
          justify-between relative
        `}
      >
        <div className="flex gap-3 w-full items-center">
          <div className="text-text-secondary">{SearchIcon}</div>
          <div className="w-full">
            <input
              type="text"
              className="
            lg:hidden 
            bg-transparent 
            text-base text-text-primary
            border-none grow
            placeholder:text-text-light
            focus:outline-none w-full
          "
              placeholder="Search Services(Ex: Instagram, Tiktok)"
              value={searchService}
              onFocus={handleInputFocus}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              onChange={(e) => setSearchService(e.target.value)}
            />
            {isDropdownOpen && (
              <div className="overflow-scroll max-h-[300px] lg:hidden top-full left-[0px] right-[0px] bg-white border border-[#ddd] rounded-[12px] border-t-0 absolute z-[99999] p-4 block mt-1">
                <h2 className="text-[20px] font-semibold text-[#363636] mb-2 leading-[1] font-clash">
                  {searchService.length > 1
                    ? "Search Results"
                    : "Recommended Services"}
                </h2>
                <div className="grid grid-cols-1 gap-3 font-satoshi font-semibold">
                  {searchService.length > 1
                    ? serviceList.data_2.map((serivce) =>
                        serivce.services.map((subservice) =>
                          subservice.name
                            .toLowerCase()
                            .includes(searchService.toLowerCase()) ? (
                            <div key={subservice.id} onClick={removeSearch}>
                              <Link
                                className="flex px-2 py-1 text-base text-text-primary font-medium font-satoshi hover:bg-background-light hover:text-primary transition-all duration-300"
                                href={`/services/${generate_slug(
                                  subservice.name
                                )}`}
                                aria-label={subservice.name}
                              >
                                {subservice.name}
                              </Link>
                            </div>
                          ) : null
                        )
                      )
                    : serviceList.data_3.slice(0, 27).map((subservice) => (
                        <div key={subservice.id} onClick={removeSearch}>
                          <Link
                            className="flex px-2 py-1 text-base text-text-primary font-medium font-satoshi hover:bg-background-light hover:text-primary transition-all duration-300"
                            href={`/services/${generate_slug(subservice.name)}`}
                            aria-label={subservice.name}
                          >
                            {subservice.name}
                          </Link>
                        </div>
                      ))}
                </div>
              </div>
            )}
          </div>
        </div>
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
