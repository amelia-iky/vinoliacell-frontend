import { useState } from 'react';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { useFetchBrand } from '../../hooks/useFetchBrand';
import { useFetchIssue } from '../../hooks/useFetchIssue';
import { usePostOrder } from '../../hooks/usePostOrder';
import Swal from 'sweetalert2';

const FormService = () => {
  const { data: brand } = useFetchBrand();
  const { data: issue } = useFetchIssue();
  const { order, loading } = usePostOrder();

  // States for form inputs
  const [selectedBrand, setSelectedBrand] = useState('');
  const [model, setModel] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [detail, setDetail] = useState('');

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!selectedBrand || !model || !selectedIssue || !detail) {
      Swal.fire({
        icon: 'warning',
        title: 'Gagal',
        text: 'Silahkah lengkapi form!',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    await order(selectedBrand, model, selectedIssue, detail);
  };

  return (
    <div className='flex flex-col justify-center items-center w-1/4 gap-5'>
      <Form className='text-gray-700' onSubmit={handleSubmit}>
        <p>Pilih Merek Anda</p>
        <select
          className='border-b-2 outline-none p-2'
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value='' disabled>
            Pilih Merek
          </option>
          {brand &&
            brand.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <p>Ketik Model Spesifik Produk Anda</p>
        <input
          type='text'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Detail Model'
          className='border-b-2 outline-none p-2'
        />

        <p>Pilih Kerusakan Anda</p>
        <select
          className='border-b-2 outline-none p-2'
          value={selectedIssue}
          onChange={(e) => setSelectedIssue(e.target.value)}
        >
          <option value='' disabled>
            Pilih Kerusakan
          </option>
          {issue &&
            issue.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <p>Ketik Kerusakan Spesifik Produk Anda</p>
        <input
          type='text'
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder='Detail Kerusakan'
          className='border-b-2 outline-none p-2'
        />
      </Form>

      <Button
        type='submit'
        variant={'primary'}
        onClick={handleSubmit}
        className='w-fit mt-5'
      >
        {loading ? 'Menyimpan...' : 'Simpan'}
      </Button>
    </div>
  );
};

export default FormService;
