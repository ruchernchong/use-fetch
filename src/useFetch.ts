import { useEffect, useState } from 'react';

const useFetch = (
  url: string,
  options?: object
): {
  isLoading: boolean;
  data: object;
} => {
  const [data, setData] = useState<Object>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      });
  }, []);

  return {
    data,
    isLoading
  };
};

export default useFetch;
