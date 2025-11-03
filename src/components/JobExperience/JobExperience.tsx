import styles from './JobExperience.module.css';

export const JobExperience = ({ duration, company,  description }: { duration: string, company: string, description: string }) => {
  return (
      <div className={styles.experience_container}>
        <p className={styles.experience_title}>{duration}</p>
        <div className={styles.experience_text}>
          <span>{company}</span>
          <p>
            {description}
          </p>
        </div>
      </div>
  );
};
