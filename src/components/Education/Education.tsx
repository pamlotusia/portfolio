import styles from './Education.module.css'

export const Education = ({
  image,
  title,
  duration,
  institution,
}: {
  image: string;
  title: string;
  duration: string;
  institution: string;
}) => {
  return (
    <div className={styles.education_container}>
     <div className={styles.education_title}>
      <img src={image} alt="instituição de ensino" />
      <h3>{title}</h3>
     </div>

      <div className={styles.education_description}>
      <span>{institution}</span>
      <p>{duration}</p>
      </div>
      
    </div>
  );
};
