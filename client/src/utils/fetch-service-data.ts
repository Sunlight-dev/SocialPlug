import { ProcessedListType } from "@/libs/types/ListTypes";
import { fetchAPI } from "./fetch-api";
import { generate_item_url } from "./functions";
import { fetchAllServiceList } from "./fetch-all-service-list";
import { getLocale } from "next-intl/server";
import { ServiceItem } from "@/libs/types/ServiceItemsMapping";

export async function fetchServiceItemMappings(currentLocale: string) {
  try {
    let i = 1;
    let pageCount = 1;
    let data: ServiceItem[] = [];
    while (true) {
      const path = "/subservices";
      const urlParamsObject = {
        populate: ["localizations.header.text", "header.text"],
        pagination: {
          page: i,
          pageSize: 100,
        },
        locale: currentLocale,
      };
      const response = await fetchAPI(path, urlParamsObject, "");
      if (i == 1) {
        pageCount = response.meta.pagination.pageCount;
      }
      const tempData = response.data;
      data = [...data, ...tempData];
      i += 1;
      if (i > pageCount) {
        break;
      }
    }
    return data;
  } catch (error) {
    console.error("Error fetching service item mappings:", error);
    return [];
  }
}

export async function fetchServiceData(itemId: string, locale: string) {
  try {
    const path = `/subservices/${itemId}`;
    const urlParamsObject = {
      pLevel: "7",
      sort: { createdAt: "asc" },
      "[locale]": locale,
    };
    const options = "";
    const fetchedData = await fetchAPI(path, urlParamsObject, options);
    return fetchedData.data;
  } catch (error) {
    console.error(error);
  }

  return "";
}

export async function fetchServiceMetaData(name: string) {
  const locale = await getLocale();
  const allData: ProcessedListType = (await fetchAllServiceList(locale)) ?? {
    data_1: [],
    data_2: [],
    data_3: [],
  };
  const subservice = allData.data_3.find(
    (sub) => generate_item_url(sub.header.text) == name
  );
  let itemId: string = "";
  if (subservice) {
    itemId = subservice.id;
    try {
      const path = `/subservices/${itemId}`;
      const urlParamsObject = {
        field: ["name"],
        populate: {
          seo: {
            populate: ["openGraph"],
          },
          localizations: {
            populate: "header.text",
          },
          header: {
            populate: "text",
          },
        },
        "[locale]": locale,
      };
      const options = "";
      const fetchedData = await fetchAPI(path, urlParamsObject, options);
      return fetchedData.data;
    } catch (error) {
      console.error(error);
    }
  }

  return "";
}
