import { useRouter } from 'next/router';
import styles from './ui.module.css';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  const router = useRouter();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <button onClick={() => router.push('/somewhere')}>Router clicked</button>
    </div>
  );
}

export default Ui;
