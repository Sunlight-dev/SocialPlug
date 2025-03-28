import React, { useState, memo, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SwitchButton } from "@/components/Buttons";
import ServicesItem from "./ServicesItem";
import { useList } from "@/providers/ListProvider";
import { ServicesListType } from "@/libs/types/ListTypes";
import { useTranslations } from "next-intl";

type FilterType = "popular" | "AToZ" | "ZToA";

const SectionServices = memo(() => {
  const { serviceList } = useList();
  const [status, setStatus] = useState<"Services" | "Tools">("Services");
  const [filter, setFilter] = useState<FilterType>("popular");
  const [filteredList, setFilteredList] = useState<ServicesListType[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 20;
  const t = useTranslations("Home");
  const filterAndSortList = useCallback(
    (list: ServicesListType[], filter: FilterType) => {
      return [...list].sort((a, b) => {
        if (filter === "AToZ") {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }
        if (filter === "ZToA") {
          return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
        }
        return Number(b.popular) - Number(a.popular);
      });
    },
    []
  );

  useEffect(() => {
    const sortedList = filterAndSortList(serviceList.data_2, filter);
    const initialData = sortedList.slice(0, itemsPerPage);
    setFilteredList(initialData);
    setPage(1);
    setHasMore(sortedList.length > itemsPerPage);
  }, [filter, serviceList, filterAndSortList]);

  const loadMore = () => {
    const nextPage = page + 1;
    const sortedList = filterAndSortList(serviceList.data_2, filter);
    const nextData = sortedList.slice(0, nextPage * itemsPerPage);
    if (nextData.length === filteredList.length) {
      setHasMore(false);
    } else {
      setFilteredList(nextData);
      setPage(nextPage);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as FilterType);
  };

  return (
    <section className="flex flex-col items-center m-[5%] justify-self-center relative w-full px-[5%]">
      <h2 className="font-h1 mb-12 animate-fade-in">{t("Services.title")}</h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-center items-end mb-5 w-full relative">
        <SwitchButton
          status={status}
          setStatus={setStatus}
          customClass="lg:w-fit w-full"
        />
        <div className="xl:absolute right-[5%] border-[1px] border-black-dark flex rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-[url('https://cdn.prod.website-files.com/628d4467de238a5806753c9b/675716e51edb39c901338e53_flowbite_sort-outline.svg')] bg-[4px_center] bg-no-repeat bg-auto border-r-[1px] border-black-dark text-black text-[12px] lg:text-[16px] font-satoshi leading-6 pl-8 p-2 bg-black-light rounded-l-[10px]">
            {t("Services.sort_by")}
          </div>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="w-30 lg:w-40 p-2 cursor-pointer bg-inherit text-[12px] lg:text-[16px] rounded-r-[10px] transition-all duration-300"
          >
            <option label={t("Services.popular")} value="popular">
              {t("Services.popular")}
            </option>
            <option label={t("Services.AToZ")} value="AToZ">
              {t("Services.AToZ")}
            </option>
            <option label={t("Services.ZToA")} value="ZToA">
              {t("Services.ZToA")}
            </option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <InfiniteScroll
          dataLength={filteredList.length}
          next={loadMore}
          onScroll={() => loadMore()}
          hasMore={hasMore}
          loader={<>Loading...</>}
          className="w-full h-max"
        >
          <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredList.map((item, index) => (
              <ServicesItem serviceData={item} key={index} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
});

SectionServices.displayName = "SectionServices";

export default SectionServices;
