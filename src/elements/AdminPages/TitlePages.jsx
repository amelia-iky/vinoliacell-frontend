import { getUserName } from '../../utils/Auth';

const TitlePages = () => {
  const userName = getUserName();

  return (
    <div className='flex flex-col gap-4 py-10 text-2xl font-semibold'>
      <h1>
        Selamat Datang <span className='font-bold'>{userName}</span>
      </h1>
      <h1>DASHBOARD</h1>
    </div>
  );
};

export default TitlePages;
