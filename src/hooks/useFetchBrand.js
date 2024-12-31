import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchBrand = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/brands');

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrand();
  }, []);

  return { data, loading, error };
};
