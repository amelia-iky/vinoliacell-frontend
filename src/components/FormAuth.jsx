import PropTypes from 'prop-types';

const Form = ({ children, onSubmit, className = '' }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='relative flex justify-center items-center w-4/12 h-full mt-16'>
        <div className='relative w-full h-96 max-w-md bg-shadowform'>
          <div className='absolute w-full h-96 right-4 bottom-8 bg-white'>
            <form
              className={`flex flex-col justify-center items-center px-10 gap-6 bg-white ${className}`}
              onSubmit={onSubmit}
            >
              {children}
            </form>
          </div>
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
