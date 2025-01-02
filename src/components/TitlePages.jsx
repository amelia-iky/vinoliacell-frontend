import PropTypes from 'prop-types';

const TitlePages = ({ children }) => {
  return (
    <div className='flex justify-center items-center'>
      <h1 className='text-3xl font-medium pt-10'>{children}</h1>
    </div>
  );
};

TitlePages.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitlePages;
