import styles from './Button.module.scss';

export const Button = (props) => {
  const { action, text, style, type, icon, disabled } = props;

  console.log(disabled);

  const className = `${styles[style]}`;

  return (
    <button className={className} type={type} onClick={action}>
      {icon} {text}
    </button>
  );
};
