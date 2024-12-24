import PropTypes from 'prop-types';

const Button = ({ type, onClick, variant, children }) => {
  const baseClass = 'py-2 px-4 w-2/3 rounded-3xl font-semibold';

  const variantClass = {
    primary: 'bg-blue-400 hover:bg-blue-500 text-white',
    secondary:
      'bg-transparent border border-primary-dark text-[#515151] text-sm',
    deleted: 'bg-red-800 text-white hover:bg-red-700',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
  };

  return (
    <button
      type={type}
      onClick={
        variant !== 'disabled' && typeof onClick === 'function'
          ? onClick
          : undefined
      }
      className={`${baseClass} ${variantClass[variant] || ''}`}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  );
};

// Validasi props menggunakan PropTypes
Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'deleted', 'disabled']),
  children: PropTypes.node.isRequired,
};

// Nilai default untuk props
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button;
