import styles from './Button.module.scss';

export const Button = (props) => {
  const { action, text, style, type } = props;

  const className = `${styles[style]}`;

  return (
    <button className={className} type={type} onClick={action}>
      {text}
    </button>
  );
};
