import Form from '../../components/Form';
import Button from '../../components/Button';
import { useFetchBrand } from '../../hooks/useFetchBrand';

const FormService = () => {
  const { data } = useFetchBrand();

  return (
    <div className='flex flex-col justify-center items-center w-1/4 gap-5'>
      <Form className='text-gray-700'>
        <p>Pilih Merek Anda</p>
        <select className='border-b-2 outline-none p-2'>
          {data &&
            data.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <p>Ketik Model Spesifik Produk Anda</p>
        <input
          type='text'
          placeholder='Model'
          className='border-b-2 outline-none p-2'
        ></input>

        <p>Pilih Kerusakan Anda</p>
        <select className='border-b-2 outline-none p-2'>
          {data &&
            data.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>

        <p>Ketik Kerusakan Spesifik Produk Anda</p>
        <input
          type='text'
          placeholder='Kerusakan'
          className='border-b-2 outline-none p-2'
        ></input>
      </Form>

      <Button
        type='submit'
        variant={'primary'}
        onClick={null}
        className='w-fit mt-5'
      >
        Simpan
      </Button>
    </div>
  );
};

export default FormService;
