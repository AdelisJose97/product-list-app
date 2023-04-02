import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [paginationOptions, setPaginationOptions] = useState({
    skip: 0,
    limit: 10,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const options = {
        method: 'GET',
        params: paginationOptions,
      };
      const { data = [] } = await axios(url, options);
      const { products } = data;
      setData(products);
    };

    fetchProducts();
  }, [paginationOptions, url]);

  return { data, setPaginationOptions, paginationOptions };
};

export default useFetch;
