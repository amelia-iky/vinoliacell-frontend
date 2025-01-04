import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useDeleteOrder = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteOrder = async (orderId) => {
    setLoading(true);
    setError(null);
    console.log('id', orderId);

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/orders/${orderId}`,
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
          text: 'Data berhasil dihapus!',
          showConfirmButton: false,
          timer: 2000,
        });

        if (onSuccess) {
          onSuccess(orderId);
        }

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      setError(error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Terjadi kesalahan saat menghapus pesanan.',
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return { deleteOrder, loading, error };
};
