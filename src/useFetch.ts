import { useEffect, useState } from 'react';

const useFetch = (
  url: string,
  options?: object,
): { isLoading: boolean; data: any } => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = () => {
    return fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data };
};

export default useFetch;
