import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes/router';

export const checkUserIsLogged = (): boolean => {
  const [isShowingForm, setIsShowingForm] = useState(false);
  const context = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (context?.user) {
      navigate(routes.profile);
    } else {
      navigate(routes.login);
      setIsShowingForm(true);
    }
  }, [context?.user]);

  return isShowingForm;
};
