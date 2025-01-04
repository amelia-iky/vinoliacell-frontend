import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('http://localhost:8000/api/users', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        });

        setUserData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return { userData, loading, error };
};
