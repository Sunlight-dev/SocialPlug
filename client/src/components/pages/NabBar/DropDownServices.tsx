import { replace_str } from "@/utils/functions";
import { ListType, Icon } from "@/libs/types/ListTypes";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useCallback, useState } from "react";

interface ServiceItemProps {
  dataItem: {
    id: string;
    name: string;
    icon: Icon;
  };
  icon: string;
  title: string;
}

const ServiceItem = memo(({ dataItem, icon, title }: ServiceItemProps) => (
  <Link
    href={`/home/services/${dataItem.id}`}
    className="
      flex items-center gap-3 
      py-2 px-4 
      w-full
      text-text-secondary
      hover:bg-background-light
      hover:text-primary
      transition-all duration-300
      group
    "
  >
    {dataItem.icon ? (
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${dataItem.icon.url}`}
        width={20}
        height={20}
        alt={title}
        className="
        w-5 h-5 
        opacity-80 
        group-hover:opacity-100
        transition-opacity duration-300
      "
      />
    ) : (
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${icon}`}
        width={20}
        height={20}
        alt={title}
        className="
        w-5 h-5 
        opacity-80 
        group-hover:opacity-100
        transition-opacity duration-300
      "
      />
    ) }
    <span className="text-[15px] font-medium">
      {replace_str(dataItem.name, title)}
    </span>
  </Link>
));

ServiceItem.displayName = "ServiceItem";

interface ServiceCategoryProps {
  val: ListType["data"][0];
}

const ServiceCategory = memo(({ val }: ServiceCategoryProps) => (
  <div className="w-full break-inside-avoid-column">
    <div
      className="
      text-base font-semibold 
      text-text-primary 
      px-4 py-2
      transition-colors duration-300
    "
    >
      {val.title}
    </div>
    <div className="w-full h-px bg-black-normal" />
    <div className="py-1">
      {val.services.map((dataItem, key) => (
        <ServiceItem
          key={key}
          dataItem={dataItem}
          icon={val.icon}
          title={val.title}
        />
      ))}
    </div>
  </div>
));

ServiceCategory.displayName = "ServiceCategory";

interface DropDownServicesProps {
  item: ListType;
  className?: string;
}

const DropDownServices = memo(
  ({ item, className = "" }: DropDownServicesProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }, []);

    return (
      <div
        className={`
      inline-block group relative
      ${className}
    `}
      >
        <div
          className="
          flex gap-1 items-center 
          cursor-pointer 
          py-4 
          font-normal text-base 
          font-satoshi
          transition-colors duration-300
          hover:text-primary
        "
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <p>{item.type}</p>
          <Image
            width={16}
            height={16}
            className="
            w-auto h-auto
            transition-transform duration-300
            group-hover:rotate-180
          "
            alt="down"
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e87_nav_dd-icon.svg"
          />
        </div>
        <div
          className={`
          absolute 
          ${isOpen ? "block" : "hidden"}
          group-hover:block 
          bg-white 
          rounded-lg 
          shadow-soft
          py-2
          animate-fade-in
          ${
            item.type === "Other" || item.type === "Tools"
              ? "right-0"
              : "left-0"
          }
        `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          {item.type === "Other" ? (
            <div
              className="
            w-[50vw] 
            max-h-[80vh] 
            overflow-y-auto 
            p-4
            scrollbar-thin scrollbar-thumb-black-normal scrollbar-track-transparent
          "
            >
              <div className="columns-[150px] w-full gap-6">
                {item.data.map((val, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ServiceCategory val={val} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="
            max-h-[60vh] 
            max-w-[50vw] 
            overflow-auto 
            p-1
            scrollbar-thin scrollbar-thumb-black-normal scrollbar-track-transparent
          "
            >
              <div className="flex w-max gap-6">
                {item.data.map((val, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ServiceCategory val={val} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

DropDownServices.displayName = "DropDownServices";

export default DropDownServices;
