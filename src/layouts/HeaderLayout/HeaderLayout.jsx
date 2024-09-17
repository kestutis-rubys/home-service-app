import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/Header/TopBar/TopBar';

export const HeaderLayout = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
