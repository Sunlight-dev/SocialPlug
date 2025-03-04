"use client";
import { QuestionsItemType } from "@/libs/types/Types";
import Image from "next/image";
import React, { memo, useState, useCallback } from "react";

interface ServiceQuestionItemProps {
  item: QuestionsItemType;
  className?: string;
}

const ServiceQuestionItem = memo(
  ({ item, className = "" }: ServiceQuestionItemProps) => {
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

    const questionId = `question-${item.question
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const answerId = `answer-${item.question
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    return (
      <div
        className={`
        inline-block relative 
        bg-white 
        border border-black/10
        rounded-lg
        w-full h-max 
        cursor-pointer 
        p-2
        transition-all duration-300
        hover:border-primary/30
        hover:shadow-soft
        group
        ${className}
      `}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={answerId}
        id={questionId}
      >
        <div
          className="
        flex justify-between items-center 
        p-4 
        hover:bg-background-light
        transition-colors duration-300
        font-clash
        group-hover:text-primary
      "
        >
          <span
            className="
          text-text-primary
          text-base md:text-lg
          font-semibold
          transition-colors duration-300
        "
          >
            {item.question}
          </span>
          <Image
            width={16}
            height={16}
            alt={`${isExpanded ? "Collapse" : "Expand"} answer`}
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e52_marketing-services_dd%20(Stroke).svg"
            className={`
            transform 
            transition-transform duration-300
            group-hover:scale-110
            ${isExpanded ? "rotate-180" : "rotate-0"}
          `}
            priority={false}
          />
        </div>
        <div
          id={answerId}
          className="
          overflow-hidden 
          transition-all duration-300 ease-in-out
          animate-fade-in
        "
          style={{
            maxHeight: isExpanded ? "1000px" : "0",
            opacity: isExpanded ? "1" : "0",
          }}
          role="region"
          aria-labelledby={questionId}
          hidden={!isExpanded}
        >
          <div className="py-2 px-4">
            <div
              className="
            text-text-secondary
            text-sm md:text-base
            leading-relaxed
            transition-colors duration-300
          "
            >
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ServiceQuestionItem.displayName = "ServiceQuestionItem";

export default ServiceQuestionItem;
