import styles from './Button.module.scss';

export const Button = (props) => {
  const { action, text, type } = props;

  const className = `${styles[type]}`;

  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};
