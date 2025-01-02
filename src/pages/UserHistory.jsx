import Navbar from '../elements/Navbar';
import TitlePages from '../components/TitlePages';
import HistoryCard from '../elements/UserPages/HistoryCard';

const UserHistory = () => {
  return (
    <>
      <Navbar />
      <TitlePages>Riwayat</TitlePages>
      <HistoryCard />
    </>
  );
};

export default UserHistory;
