import React from "react";
import { Questions } from "@/libs/data/Questions";
import QuestionsItem from "./QuestionsItem";
import MainButton from "@/components/Buttons";

const Question = () => {
  return (
    <div className="flex flex-col py-[80px] items-center bg-black-light w-full">
      <div className="max-w-[1366px] justify-self-center px-10">
        <div className="font-h1-md lg:font-h1-lg mb-12">
          Your Questions <span className="text-green-light">Answered</span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
          {Questions.map((item, index) => (
            <QuestionsItem item={item} key={index} />
          ))}
        </div>
        <div className="flex justify-between bg-black-medium border-[1px] border-[rgb(224,_224,_224)] rounded-[12px] p-6 w-full h-max">
          <div className="flex flex-col gap-2">
            <span className="text-black text-[16px] md:text-[20px] font-semibold font-clash leading-[25px]">
              Still have questions?
            </span>
            <span className="text-[rgba(0,0,0,0.5)] text-[14px] md:text-[18px]">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </span>
          </div>
          <MainButton type="green-main" title="Get in touch" />
        </div>
      </div>
    </div>
  );
};

export default Question;
