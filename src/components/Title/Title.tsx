import styles from './Title.module.css'

export const Title = ({ title }: {title: string}) => {
  return (
    <h1 className={styles.title}>
      {title} <span>.</span>
    </h1>
  );
};
 