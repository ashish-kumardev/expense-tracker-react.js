import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(key))) {
      setData(JSON.parse(localStorage.getItem(key)))
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    if(typeof newData === 'function'){
      localStorage.setItem(key, JSON.stringify(newData(data)))
      setData(newData(data))
      return;
    }
    localStorage.setItem(key, JSON.stringify(newData))
    setData(newData)
  }

  return [data, updateLocalStorage]
}
