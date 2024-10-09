import styles from './TextField.module.scss';

interface TextFieldProps {
  style: 'search' | 'simple' | 'error';
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  name: string;
  label?: string;
}

export const TextField = ({
  style,
  placeholder,
  value,
  onChange,
  error,
  type,
  name,
  label,
}: TextFieldProps) => {
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
      {error && <small className={styles.error}>{error}</small>}
    </>
  );
};
