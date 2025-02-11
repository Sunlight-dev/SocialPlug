import { useServices } from "@/providers/ServicesProvider";
import React from "react";

const ServiceFeature = () => {
  const { serviceItems, isLoading } = useServices();
  if (!serviceItems?.info) return <div className="">no data</div>;
  return <div>ServiceFeature</div>;
};

export default ServiceFeature;
