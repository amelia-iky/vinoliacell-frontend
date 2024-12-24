import Navbar from '../elements/Navbar';
import Form from '../components/Form';
import Button from '../components/Button';

const Signin = () => {
  const handleSignin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Form className='py-7' onSubmit={handleSignin}>
        <h1 className='text-xl font-semibold text-center'>
          Satu akun. Apa pun perangkatnya. Khusus untuk Anda
        </h1>
        <p className='text-sm'>Masuk untuk mulai</p>
        <input
          type='email'
          placeholder='Email'
          className='border-b-2 outline-none px-3 py-2 bg-white'
        />
        <input
          type='password'
          placeholder='Password'
          className='border-b-2 outline-none px-3 py-2 bg-white'
        />
        <Button type='button' variant={'primary'} className='w-56'>
          Login
        </Button>
        <p>
          Belum punya akun? <a href='/signup'>Daftar</a>
        </p>
      </Form>
    </>
  );
};

export default Signin;
