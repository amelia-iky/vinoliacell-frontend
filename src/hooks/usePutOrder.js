import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const usePutOrder = (orderId) => {
  const [loading, setLoading] = useState(false);

  const putOrder = async (status, information) => {
    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:8000/api/orders/${orderId}`,
        { status, information },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Data berhasil diubah!',
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        // Handle other non-success statuses if needed
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Data gagal diubah!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Terdapat kesalahan!',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        // Handle unexpected errors
        Swal.fire({
          icon: 'error',
          title: 'Gagal',
          text: 'Terjadi kesalahan tak terduga!',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return { putOrder, loading };
};
