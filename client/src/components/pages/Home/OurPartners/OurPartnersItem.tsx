import { OurPartnersItemType } from "@/libs/types/Types";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

interface OurPartnersItemProps {
  item: OurPartnersItemType;
  className?: string;
  style?: React.CSSProperties;
}

const OurPartnersItem = memo(
  ({ item, className = "", style }: OurPartnersItemProps) => {
    return (
      <div
        role="listitem"
        className={`block transition-all duration-300 hover:scale-105 ${className}`}
      >
        <Link
          href={item.host}
          className="block focus:outline-none focus:ring-2 focus:ring-green-light rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${item.alt} website`}
        >
          <div className="relative w-full aspect-[238/83] bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <Image
              width={238}
              height={83}
              alt={item.alt}
              src={item.icon}
              className="filter brightness-[21%] grayscale hover:filter-none w-full h-full object-contain transition-all duration-300"
              loading="lazy"
              priority={false}
              style={style}
            />
          </div>
        </Link>
      </div>
    );
  }
);

OurPartnersItem.displayName = "OurPartnersItem";

export default OurPartnersItem;
