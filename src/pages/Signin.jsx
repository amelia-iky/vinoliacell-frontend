import { useState } from 'react';
import Navbar from '../elements/Navbar';
import Form from '../components/Form';
import Button from '../components/Button';
import { useSignin } from '../hooks/useSignin';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin, loading } = useSignin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signin(email, password);
  };

  return (
    <>
      <Navbar />
      <Form className='py-7' onSubmit={handleSubmit}>
        <h1 className='text-xl font-semibold text-center'>
          Satu akun. Apa pun perangkatnya. Khusus untuk Anda
        </h1>
        <p className='text-sm'>Masuk untuk mulai</p>
        <input
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='border-b-2 outline-none px-3 py-2 bg-white'
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='border-b-2 outline-none px-3 py-2 bg-white'
          required
        />
        <Button
          type='submit'
          variant={'primary'}
          onClick={handleSubmit}
          className='w-56'
        >
          {loading ? 'Memuat...' : 'Login'}
        </Button>
        <p>
          Belum punya akun?{' '}
          <a className='underline underline-offset-4' href='/signup'>
            Daftar
          </a>
        </p>
      </Form>
    </>
  );
};

export default Signin;
