import PropTypes from 'prop-types';

const Form = ({ children, onSubmit }) => {
  return (
    <div className='relative flex justify-center items-center h-full mt-16'>
      <div className='relative w-full h-96 max-w-md bg-shadowform'>
        <div className='absolute w-full h-96 right-3 bottom-7 bg-white'>
          <form
            className='flex flex-col justify-center items-center py-7 px-10 gap-6 bg-white'
            onSubmit={onSubmit}
          >
            <h1 className='text-xl font-bold text-center'>
              Satu akun. Apa pun perangkatnya. Khusus untuk Anda
            </h1>
            <p className='text-sm'>Masuk untuk mulai</p>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Form;
