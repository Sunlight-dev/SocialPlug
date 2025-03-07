import MainButton from "@/components/Buttons";
import { useServices } from "@/providers/ServicesProvider";
import Image from "next/image";
import React, { memo } from "react";
import ServiceAdvantage from "./ServiceAdvantage";
import { StrapiParagraph, StrapiText } from "@/components/StrapiComponents";

interface ServiceState {
  counters: string;
  character: string;
}

const ServiceInfo = memo(() => {
  const { serviceItems } = useServices();

  if (!serviceItems?.header) {
    return null;
  }

  return (
    <section
      className="flex flex-col w-full m-auto items-center"
      aria-labelledby="service-info-title"
    >
      <div className="flex lg:flex-row lg:items-start items-center flex-col gap-5 lg:gap-20 px-[3%] pt-[80px] m-auto max-w-[1366px] bg-[linear-gradient(#fffffff5,#fff),url('https://cdn.prod.website-files.com/628d4467de238a5806753c9b/67bb4de67a2ea65794f385ee_perspective-grid-black.webp')] bg-[position:0_0,50%_0] bg-[size:auto,contain] bg-no-repeat">
        <div className="flex flex-col gap-7 w-[80%] lg:w-[50%] lg:items-start items-center lg:text-left grow">
          <StrapiText
            data={serviceItems.header.text}
            customClassName="!font-service text-wrap !text-center lg:!text-left"
          />
          <StrapiText
            data={serviceItems.simpledescription.text}
            customClassName="font-service-text lg:text-[20px] !text-center lg:!text-left"
          />
          <div className="flex items-center mt-2">
            <Image
              width={24}
              height={24}
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff4056e10165cf63568681_Star-icon-2.svg"
              alt=""
              className="mr-1"
              aria-hidden="true"
            />
            <p className="font-clash text-[#686889] text-[16px] leading-[25px] font-medium">
              Rated{" "}
              <span className="text-green-light font-semibold">
                {serviceItems.introduction.rated}/5
              </span>{" "}
              from over {serviceItems.introduction.CounterOfReviews}reviews
            </p>
          </div>
          <ServiceAdvantage />
        </div>
        <div
          className="z-20 px-8 py-9 flex flex-col gap-6 grow items-center w-max bg-[rgb(20,_20,_27)] bg-[url('https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff3f8c57c2b777f07afb19_socialplug-pricingbox-illustration.svg')] bg-right-top bg-no-repeat bg-auto rounded-2xl"
          role="complementary"
          aria-label="Pricing information"
        >
          <div className="w-full flex flex-col items-start">
            <p className="font-service-text text-[16px] !text-black-steel">
              Starting from
            </p>
            <p className="font-service-main md:font-service-md lg:font-service-lg lg:!text-[56px] !text-white">
              ${serviceItems.introduction.OrderIntro.price}{" "}
              <span className="font-service-text text-[16px] !text-green-light">
                / {serviceItems.introduction.OrderIntro.unit}
              </span>
            </p>
          </div>
          <StrapiParagraph
            paragraph={serviceItems.introduction.OrderIntro.list}
            customClassName="font-service-text text-[16px] !text-black-steel"
            customParentClassName="pr-10"
          />
          <MainButton
            type="primary"
            title="Order Now >"
            customClass="w-full"
            aria-label="Order service now"
          />
          <div aria-hidden="true">
            <Image
              width={316}
              height={24}
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/66292d46e99717b0f56ae2a2_payment-icons-24.svg"
              alt=""
              priority={false}
            />
          </div>
        </div>
      </div>
      <div className="z-10 mt-[-30px] w-full bg-black-light py-[60px] flex flex-col items-center">
        <div className="relative max-w-[1366px] w-full flex gap-8 items-center px-10">
          {serviceItems.introduction.StateOfService.States.map(
            (item: ServiceState) => (
              <div key={item.character} className="text-left" role="listitem">
                <p className="font-service-main lg:!text-[48px]">
                  {item.counters}
                </p>
                <p className="font-service-text text-[16px]">
                  {item.character}
                </p>
              </div>
            )
          )}
          <div
            className="w-full h-[1px] bg-black-normal absolute justify-self-center bottom-[-50px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
});

ServiceInfo.displayName = "ServiceInfo";

export default ServiceInfo;
