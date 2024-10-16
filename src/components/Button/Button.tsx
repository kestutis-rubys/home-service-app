import styles from './Button.module.scss';

interface ButtonProps {
  action?: () => void;
  text: string;
  style: 'login' | 'loginForm' | 'service' | 'icon' | 'book-appoinment';
  type: 'button' | 'submit';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  action,
  text,
  style,
  type,
  disabled,
  icon,
}: ButtonProps) => {
  const className = `${styles[style]}`;

  return (
    <button
      className={className}
      type={type}
      onClick={action}
      disabled={disabled}
    >
      {icon} {text}
    </button>
  );
};
