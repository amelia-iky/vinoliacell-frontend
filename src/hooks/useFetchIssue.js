import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchIssue = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/issues');

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIssue();
  }, []);

  return { data, loading, error };
};
