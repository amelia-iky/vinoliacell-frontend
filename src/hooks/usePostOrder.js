import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const usePostOrder = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const order = async (brand, model, issue, detail) => {
    setLoading(true);
    setError(null);

    // Get token
    const token = sessionStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:8000/api/orders',
        {
          brand,
          model,
          issue,
          detail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        // Set data to state
        setData(response.data);

        // Alert success
        Swal.fire({
          icon: 'success',
          title: 'Order Berhasil',
          text: 'Order berhasil dibuat!',
          showConfirmButton: false,
          timer: 2000,
        });

        // Redirect to history page
        setTimeout(() => {
          navigate('/riwayat');
        }, 2000);
      } else if (response.status === 401) {
        // Alert error
        Swal.fire({
          icon: 'error',
          title: 'Order Gagal',
          text: 'Order gagal dibuat!',
          showConfirmButton: false,
          timer: 2000,
        });
      } else if (response.status === 404) {
        // Alert error
        Swal.fire({
          icon: 'error',
          title: 'Gagal Memuat Data',
          text: 'Belum ada order!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      setError(error);
      // Handle error
      if (axios.isAxiosError(error && error.response)) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Terdapat kesalahan!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { order, data, loading, error };
};
