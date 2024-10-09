import * as MaterialDesign from 'react-icons/io5';

type IconName = keyof typeof MaterialDesign;

const getIcon = (icon: IconName) => {
  return MaterialDesign[icon];
};

export default getIcon;
