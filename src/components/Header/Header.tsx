import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        Pamela Lima <span>/</span>
      </a>
      <ul>
        <li className={styles.scroll_item}>
          <a href="#about">Sobre</a>
        </li>
        <li className={styles.scroll_item}>
          <a href="#experience">Experiência</a>
        </li>
        <li className={styles.scroll_item}>
          <a href="#formation">Formação</a>
        </li>
        <li className={styles.scroll_item}>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </header>
  );
};
