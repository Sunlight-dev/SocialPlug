import {
  ListType,
  RawData,
  ServicesListType,
  SubserviceDataType,
} from "@/libs/types/ListTypes";
import { fetchAPI } from "./fetch-api";

const SERVICE_TYPE_ORDER = {
  "Twitter(X)": 0,
  Twitter: 0,
  Reddit: 1,
  Instagram: 2,
  TikTok: 3,
  Youtube: 4,
  LinkedIn: 5,
  Facebook: 6,
  Spotify: 7,
  Telegram: 8,
  Tools: 9,
} as const;

export async function fetchAllServiceList(locale: string) {
  let pageCount = 1;
  let rawData: RawData[] = [];
  try {
    let i = 1;
    while (true) {
      const path = "/services";
      const urlParamsObject = {
        fields: ["documentId", "type", "popular"],
        populate: {
          subservices: {
            fields: ["name", "documentId", "popular", "recommend"],
            populate: ["icon", "header.text"],
            sort: [{ popular: "desc" }],
          },
          icon: { fields: ["url"] },
          order_icon: { fields: ["url"] },
        },
        sort: [{ popular: "desc" }],
        "[locale]": locale,
        pagination: {
          page: i,
          pageSize: 100,
        },
      };
      const responseData = await fetchAPI(path, urlParamsObject, "");
      if (!responseData.data) break;
      const tempRawData: RawData[] = responseData.data;
      rawData = [...rawData, ...tempRawData];
      if (i == 1) {
        pageCount = responseData.meta.pagination.pageCount;
      }
      i += 1;
      if (i > pageCount) {
        break;
      }
    }
    const filteredData = transformRawData(rawData);
    const processedList = processServiceData(filteredData);
    return processedList;
  } catch (err) {
    const error =
      err instanceof Error ? err : new Error("Failed to fetch data");
    console.error("Error fetching services:", error);
  }
}

const transformRawData = (rawData: RawData[]): ListType[] => {
  return rawData.map((item) => ({
    type: item.type,
    icon: item.order_icon?.url,
    popular: item.popular,
    data: [
      {
        title: item.type,
        icon: item.icon.url,
        services: item.subservices.map((subservice) => ({
          name: subservice.name,
          id: subservice.documentId,
          header: subservice.header,
          icon: subservice.icon,
          recommend: subservice.recommend,
          popular: subservice.popular,
        })),
      },
    ],
  }));
};

const processServiceData = (filteredData: ListType[]) => {
  const servicesList: ListType[] = Array(10).fill(null);
  const allServicesData: ServicesListType[] = [];
  const allSubservicesData: SubserviceDataType[] = [];
  filteredData.forEach((item) => {
    if (!item.data?.[0]) {
      return;
    }

    const { type } = item;
    const dataItem = item.data[0];
    const baseIndex = getServiceIndex(type);

    const newType =
      type === "Tools" ? "FreeTools" : type === "Telegram" ? "Other" : type;
    const finalType = newType === "Twitter(X)" ? "Twitter" : newType;

    const newData: ListType = {
      type: finalType,
      icon: item.icon,
      popular: item.popular,
      data: [
        {
          title: dataItem.title,
          icon: dataItem.icon,
          services: [...dataItem.services],
        },
      ],
    };
    allServicesData.push({
      popular: item.popular,
      title: dataItem.title,
      icon: dataItem.icon,
      services: [...dataItem.services],
    });
    dataItem.services.map((item) => allSubservicesData.push(item));

    if (baseIndex !== -1) {
      if (servicesList[baseIndex]) {
        // Add to existing category
        servicesList[baseIndex].data.push(newData.data[0]);
      } else {
        // Create new category
        servicesList[baseIndex] = newData;
      }
    }
  });
  return {
    data_1: servicesList.filter(Boolean),
    data_2: allServicesData,
    data_3: allSubservicesData,
  };
};

const getServiceIndex = (type: string): number => {
  const baseIndex = SERVICE_TYPE_ORDER[type as keyof typeof SERVICE_TYPE_ORDER];
  if (baseIndex !== undefined) {
    return baseIndex;
  }

  const subTypeIndices = {
    Twitter: 0,
    Reddit: 1,
    Instagram: 2,
    TikTok: 3,
    Youtube: 4,
    LinkedIn: 5,
    Facebook: 6,
    Spotify: 7,
  };

  for (const [baseType, index] of Object.entries(subTypeIndices)) {
    if (type.includes(baseType)) {
      return index;
    }
  }

  return 8; // Default to Other
};
