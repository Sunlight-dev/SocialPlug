import { StrapiParagraph, StrapiText } from "@/components/StrapiComponents";
import { useServices } from "@/providers/ServicesProvider";
import Image from "next/image";
import React from "react";

const ServiceGoodPoints = () => {
  const { serviceItems } = useServices();
  if (!serviceItems?.introduction.GoodPoints) return "";
  return (
    <div className="py-[80px] flex flex-col items-center px-10 border-b-[1px] border-black-normal">
      <div className="max-w-[1366px] flex flex-col gap-7 w-full items-center mb-8">
        {serviceItems.introduction.GoodPoints?.chapter.map(
          (chapterItem, index) => (
            <div
              className={`flex flex-row gap-5 items-center ${
                index % 2 != 0 && "flex-row-reverse"
              }`}
              key={index}
            >
              <div className="flex flex-col gap-5 justify-start">
                <StrapiText
                  data={chapterItem.title.text}
                  customClassName="font-h1 !text-left"
                />
                {chapterItem.section.map((sectionItem, index) => (
                  <div className="flex flex-col gap-4" key={index}>
                    {sectionItem.title && (
                      <StrapiText
                        data={sectionItem.title.text}
                        customClassName="font-main text-black font-semibold lg:text-[24px]"
                      />
                    )}
                    <StrapiParagraph
                      paragraph={sectionItem.content}
                      customClassName="font-main text-[#686889] lg:text-[20px]"
                    />
                  </div>
                ))}
              </div>
              {chapterItem.img && (
                <Image
                  width={50}
                  height={445}
                  alt=""
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${chapterItem.img[0].url}`}
                  className="w-fit h-fit"
                />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceGoodPoints;
