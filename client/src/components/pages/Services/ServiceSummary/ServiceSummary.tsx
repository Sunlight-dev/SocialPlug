import { StrapiText } from "@/components/StrapiComponents";
import { useServices } from "@/providers/ServicesProvider";
import Image from "next/image";
import React, { memo } from "react";

interface SummaryItem {
  title: string;
  content: string;
  icon: string;
}

const ServiceSummary = () => {
  const { serviceItems } = useServices();

  if (!serviceItems?.introduction) {
    return null;
  }
  if (!serviceItems.introduction?.Summary) {
    return null;
  }

  return (
    <section className="w-full py-[80px] bg-black-light flex flex-col items-center border-b-[1px] border-black-normal">
      <div className="max-w-[1366px] w-full flex flex-col items-center px-10">
        <h2 className="font-h1 sm:80% lg:w-[50%] text-wrap">
          <StrapiText data={serviceItems.introduction.Summary.title.text} />
        </h2>
        <Image
          width={300}
          height={25}
          alt=""
          src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6403637940112104f075f0c2_underline1.svg"
          className="my-5"
          priority={false}
        />
        <div className="w-full flex flex-col gap-6 md:grid md:grid-cols-3 lg:grid-cols-4 items-stretch mt-8">
          {serviceItems.introduction.Summary.EachSummary.map(
            (item: SummaryItem, index: number) => (
              <div className="w-full" key={index}>
                <div className="relative mt-[25px] flex flex-col h-[calc(100%-25px)] gap-2 px-6 pb-6 pt-10 cursor-pointer border border-black-normal hover:border-primary rounded-md transition-all duration-500">
                  <Image
                    width={50}
                    height={50}
                    alt=""
                    src={item.icon}
                    className="absolute top-[-25px] left-5"
                    priority={false}
                  />
                  <p className="font-h2 !text-left mt-3">{item.title}</p>
                  <p className="font-service-text lg:text-[18px]">
                    {item.content}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

ServiceSummary.displayName = "ServiceSummary";

export default memo(ServiceSummary);
