import { useState } from "react";

export function useFilter(dataList, filteredKey) {
  const [query, setQuery] = useState("");
  const filteredData = dataList.filter((el) =>
    el[filteredKey].toLowerCase().includes(query)
  );

  return [filteredData, setQuery];
}
