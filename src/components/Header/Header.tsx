import { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HiSun } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi2";

import styles from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        Pamela Lima <span>/</span>
      </a>

      <div className={styles.navbar}>
        <button
          className={styles.menu_button}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FiX size={34} /> : <FiMenu size={34} />}
        </button>
        <ul className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
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
        </ul>{" "}
        <button onClick={toggleTheme} className={styles.theme_button}>
          {theme === "light" ? (
            <HiSun size={30} />
          ) : (
            <HiOutlineSun size={30} color="#f2f2f2" />
          )}
        </button>
      </div>
    </header>
  );
};
