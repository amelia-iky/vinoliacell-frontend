import PropTypes from 'prop-types';

const ButtonIcon = ({ type, onClick, variant, children, icon: Icon }) => {
  const baseClass =
    'flex items-center gap-2 py-2 px-4 rounded-3xl font-semibold';

  const variantClass = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary:
      'bg-transparent border border-primary-dark text-[#515151] text-sm',
    deleted: 'bg-red-500 text-white hover:bg-red-600',
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
      {Icon && <Icon className='text-lg' />} {/* Render the icon if provided */}
      {children}
    </button>
  );
};

// Validasi props menggunakan PropTypes
ButtonIcon.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'deleted', 'disabled']),
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType, // Validates React components for icons
};

// Nilai default untuk props
ButtonIcon.defaultProps = {
  type: 'button',
  variant: 'primary',
  icon: null, // Default is no icon
};

export default ButtonIcon;
