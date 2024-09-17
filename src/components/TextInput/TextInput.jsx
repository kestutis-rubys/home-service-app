import styles from './TextInput.module.scss';

export const TextInput = (props) => {
  const { type, placeholder } = props;

  const className = `${styles[type]}`;

  return <input className={className} placeholder={placeholder} />;
};
