"use client";
import { QuestionsItemType } from "@/libs/types/Types";
import Image from "next/image";
import React, { memo, useState, useCallback } from "react";

interface ServiceQuestionItemProps {
  item: QuestionsItemType;
}

const ServiceQuestionItem = memo(({ item }: ServiceQuestionItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleToggle();
      }
    },
    [handleToggle]
  );

  return (
    <div
      className="inline-block relative bg-white border border-black/10 rounded-lg py-1 w-full h-max cursor-pointer transition-all duration-500 ease-in-out hover:border-primary/30 hover:shadow-soft group break-inside-avoid"
      onClick={handleToggle}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="flex gap-2 justify-between items-center p-6 transition-all duration-500 ease-in-out font-clash group-hover:text-primary">
        <span className="text-text-primary text-lg font-semibold transition-all duration-500 ease-in-out      ">
          {item.question}
        </span>
        <Image
          width={16}
          height={16}
          alt={`${isExpanded ? "Collapse" : "Expand"} answer`}
          src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e52_marketing-services_dd%20(Stroke).svg"
          className={`
            transform 
            transition-all duration-500 ease-in-out
            group-hover:scale-110
            ${isExpanded ? "rotate-0" : "-rotate-90"}
          `}
          priority={false}
        />
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 px-4">
            <div className="text-text-secondary text-base leading-relaxed transition-all duration-300 ease-in-out">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceQuestionItem.displayName = "ServiceQuestionItem";

export default ServiceQuestionItem;
