import MainButton from "@/components/Buttons";
import { StrapiParagraph, StrapiText } from "@/components/StrapiComponents";
import { useServices } from "@/providers/ServicesProvider";
import Image from "next/image";
import React, { memo } from "react";
import { BlogType } from "@/libs/types/ServiceJsonDataType";

interface ServiceUpBlogsProps {
  className?: string;
}

const ServiceUpBlogs = memo(({ className = "" }: ServiceUpBlogsProps) => {
  const { serviceItems } = useServices();

  if (!serviceItems?.introduction) {
    return null;
  }
  if (!serviceItems.introduction?.UpBlogs) {
    return null;
  }

  return (
    <section
      className={`
        w-full py-[80px] border-b-[1px] border-black-normal
        ${className}
      `}
    >
      <div className="flex flex-col gap-20 max-w-[1366px] justify-self-center items-center px-10">
        {serviceItems.introduction.UpBlogs.title?.text && (
          <h2 id="blogs-heading" className="font-h1 w-[50%] text-wrap">
            <StrapiText
              data={serviceItems.introduction.UpBlogs.title.text}
              customClassName="font-h1 w-[50%] text-wrap"
            />
          </h2>
        )}
        <div className="w-full flex flex-col gap-10">
          {serviceItems.introduction.UpBlogs.Blog.map(
            (item: BlogType, index: number) => (
              <article
                className={`w-[100%] flex lg:flex-row flex-col gap-[120px] items-center ${
                  index % 2 !== 0
                    ? "lg:flex-row-reverse flex-col-reverse mr-16"
                    : "ml-16"
                }`}
                key={index}
              >
                <Image
                  width={500}
                  height={500}
                  alt={`illustration`}
                  src={item.img}
                  className="lg:w-[40%] md:w-[50%] w-[70%]"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="flex flex-col gap-5 lg:w-[50%]">
                  <h3 className="font-h1 !text-left">
                    <StrapiText
                      data={item.title.text}
                      customClassName="font-h1 !text-left"
                    />
                  </h3>
                  <StrapiParagraph
                    paragraph={item.paragraph}
                    customClassName="font-satoshi text-[#686889] text-[18px]"
                  />
                  {item.button && (
                    <MainButton
                      type="primary"
                      title={item.button}
                      customClass="w-[50%]"
                      link={`${serviceItems.ordernow}`}
                    />
                  )}
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
});

ServiceUpBlogs.displayName = "ServiceUpBlogs";

export default ServiceUpBlogs;
