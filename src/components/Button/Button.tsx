import styles from './Button.module.scss';

interface ButtonProps {
  action?: () => void;
  text: string;
  style: 'login' | 'loginForm' | 'service' | 'icon';
  type: 'button' | 'submit';
  icon?: React.ReactNode;
}

export const Button = ({ action, text, style, type, icon }: ButtonProps) => {
  const className = `${styles[style]}`;

  return (
    <button className={className} type={type} onClick={action}>
      {icon} {text}
    </button>
  );
};
