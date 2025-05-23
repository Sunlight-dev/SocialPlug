import { useServices } from "@/providers/ServicesProvider";
import React, { memo } from "react";
import ServicePackageItem from "./ServicePackageItem";
import { PackageType } from "@/libs/types/ServiceJsonDataType";

const ServicePackage = () => {
  const { serviceItems } = useServices();
  if (!serviceItems?.introduction) {
    return null;
  }
  if (!serviceItems.introduction?.ChoosePackage) {
    return null;
  }

  return (
    <section className="w-full py-6 md:py-14 lg:py-[80px]">
      <div className="max-w-[1366px] w-full px-10 flex gap-5 justify-self-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceItems.introduction.ChoosePackage.package.map(
            (item: PackageType, index: number) => (
              <ServicePackageItem
                level={item.level}
                price={item.price}
                unit={item.unit}
                popular={item.popular}
                list={item.list}
                key={index}
                link={serviceItems.ordernow}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

ServicePackage.displayName = "ServicePackage";

export default memo(ServicePackage);
