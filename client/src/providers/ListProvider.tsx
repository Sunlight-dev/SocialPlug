"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  RawData,
  ListType,
  ServicesListType,
  SubserviceDataType,
} from "@/libs/types/ListTypes";
import { fetchAPI } from "@/utils/fetch-api";

interface ListContextProps {
  list: ListType[];
  serviceList: ServicesListType[];
  subServiceList: SubserviceDataType[];
  isLoading: boolean;
  error: Error | null;
}

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

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

const ListContext = createContext<ListContextProps>({
  list: [],
  serviceList: [],
  subServiceList: [],
  isLoading: true,
  error: null,
});

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider");
  }
  return context;
};

const transformRawData = (rawData: RawData[]): ListType[] => {
  return rawData.map((item) => ({
    type: item.type,
    popular: item.popular,
    data: [
      {
        title: item.type,
        icon: item.icon.url,
        services: item.subservices.map((subservice) => ({
          name: subservice.name,
          id: subservice.documentId,
          icon: subservice.icon,
          recommend: subservice.recommend,
          popular: subservice.popular,
        })),
      },
    ],
  }));
};

const getServiceIndex = (type: string): number => {
  const baseIndex = SERVICE_TYPE_ORDER[type as keyof typeof SERVICE_TYPE_ORDER];
  if (baseIndex !== undefined) {
    return baseIndex;
  }

  // Handle sub-types
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
    if (type.startsWith(baseType)) {
      return index;
    }
  }

  return 8; // Default to Other
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

export const ListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [meta, setMeta] = useState<Meta | null>(null);
  const [list, setList] = useState<ListType[]>([]);
  const [serviceList, setServiceList] = useState<ServicesListType[]>([]);
  const [subServiceList, setSubServiceList] = useState<SubserviceDataType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(
    async (start: number, limit: number) => {
      try {
        setError(null);
        const path = "/services";
        const urlParamsObject = {
          sort: { popular: "desc" },
          populate: ["subservices.icon", "icon"],
          pagination: {
            start,
            limit,
          },
        };

        const responseData = await fetchAPI(path, urlParamsObject, "");
        if (!meta?.pagination) {
          setMeta(responseData.meta);
        }

        const rawData: RawData[] = responseData.data;
        const filteredData = transformRawData(rawData);
        const processedList = processServiceData(filteredData);
        setList(processedList.data_1);
        setServiceList(processedList.data_2);
        setSubServiceList(processedList.data_3);
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Failed to fetch data");
        setError(error);
        console.error("Error fetching services:", error);
      } finally {
        if (limit != 1) setIsLoading(false);
      }
    },
    [meta]
  );

  useEffect(() => {
    if (meta?.pagination) {
      fetchData(0, meta.pagination.total);
    } else {
      fetchData(0, 1);
    }
  }, [fetchData, meta]);

  const value = useMemo(
    () => ({
      list,
      serviceList,
      subServiceList,
      isLoading,
      error,
    }),
    [list, isLoading, error, serviceList, subServiceList]
  );

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
