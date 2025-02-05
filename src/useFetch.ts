import { useEffect, useState } from "react";

const useFetch = (
  url: string,
  options?: RequestInit,
): {
  isLoading: boolean;
  data: object;
} => {
  const [data, setData] = useState<object>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [options, url]);

  return {
    data,
    isLoading,
  };
};

export default useFetch;
