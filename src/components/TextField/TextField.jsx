import styles from './TextField.module.scss';

export const TextField = (props) => {
  const { style, placeholder, value, onChange, error, type, name, label } =
    props;

  const className = `${styles[style]}`;

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={className}
        type={type ?? 'text'}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
      {error && <small>{error}</small>}
    </>
  );
};
