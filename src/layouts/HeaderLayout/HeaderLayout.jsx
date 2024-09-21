import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/Header/TopBar/TopBar';
import { Footer } from '../../components/Footer/Footer';

export const HeaderLayout = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
