import Navbar from '../elements/Navbar';
import Form from '../components/Form';
import Button from '../components/Button';

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Form className='pt-12 pb-14' onSubmit={handleSignup}>
        <h1 className='text-xl font-semibold text-center'>Buat akun anda</h1>
        <input
          type='text'
          placeholder='Nama Lengkap'
          className='border-b-2 outline-none px-3 py-2 bg-white'
        />
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
        <Button type='button' variant={'primary'}>
          Register
        </Button>
      </Form>
    </>
  );
};

export default Signup;
