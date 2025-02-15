import { StrapiText } from "@/components/StrapiComponents";
import { useServices } from "@/providers/ServicesProvider";
import Image from "next/image";
import React from "react";

const ServiceSummary = () => {
  const { serviceItems } = useServices();
  if (!serviceItems?.introduction.Summary) return "";
  return (
    <div className="w-full py-[80px] bg-black-light flex flex-col items-center border-b-[1px] border-black-normal">
      <div className="max-w-[1366px] w-full flex flex-col items-center px-10">
        <StrapiText
          data={serviceItems.introduction.Summary.title.text}
          customClassName="font-h1 w-[50%] text-wrap"
        />
        <Image
          width={300}
          height={25}
          alt="why buy under"
          src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6403637940112104f075f0c2_underline1.svg"
          className="my-5"
        />
        <div className="w-full grid grid-cols-3 items-stretch gap-6 mt-8">
          {serviceItems.introduction.Summary.EachSummary.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="relative mt-[25px] flex flex-col h-[calc(100%-25px)] gap-5 px-5 pb-5 pt-10 cursor-pointer border border-black-normal hover:border-green-light rounded-md transition-all duration-500">
                <Image
                  width={50}
                  height={50}
                  alt={item.title}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.icon.url}`}
                  className="absolute top-[-25px] left-5"
                />
                <h2 className="font-h2 !text-left">{item.title}</h2>
                <p className="font-service-text text-[18px]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSummary;
