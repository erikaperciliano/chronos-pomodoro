import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, labelText, ...props }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='myInput'>{labelText}</label>
      <input className={styles.input} id={id} {...props} />
    </>
  );
}
