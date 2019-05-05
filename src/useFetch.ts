import { useEffect, useState } from 'react';

const useFetch = (
  url: string,
  options?: object,
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
  }, []);

  return Object.assign([isLoading, data], { isLoading, data });
};

export default useFetch;
