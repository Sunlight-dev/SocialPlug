import React from "react";
import DropDownServices from "./DropDownServices";
import { useData } from "@/providers/DataProvider";

const NavBarBottom = () => {
  const { data } = useData();
  return (
    <div className="bg-black-light border-y border-black-dark py-2 w-full">
      <div className="lg:flex lg:justify-between justify-self-center w-[85%]">
        {data.map((val, index) => (
          <DropDownServices key={index} item={val} />
        ))}
      </div>
    </div>
  );
};

export default NavBarBottom;
