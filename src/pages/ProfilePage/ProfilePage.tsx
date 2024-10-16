import { checkUserIsLogged } from '../../utils/checkUserIsLogined';

export const ProfilePage: React.FC = () => {
  const isShowingForm = checkUserIsLogged();

  return !isShowingForm && <div>Profile Page</div>;
};
