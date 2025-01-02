import PropTypes from 'prop-types';

const Form = ({ children, onSubmit, className = '' }) => {
  return (
    <div className='flex-col bg-white w-full rounded-lg'>
      <form
        className={`flex flex-col p-3 gap-2 justify-start ${className}`}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Form;
