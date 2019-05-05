import { useEffect, useState } from 'react';

const useFetch = (
  url: string,
  options?: object,
  deps?: object,
): { isLoading: boolean; data: any } => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  }, [deps]);

  return { isLoading, data };
};

export default useFetch;
