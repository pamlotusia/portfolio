import styles from "./Presentation.module.css";
import foto from "./../../assets/presentation.png";
import { SiNestjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Presentation = () => {
  return (
    <section className={styles.presentation_container}>
      <img src={foto} />
      <div className={styles.presentation_text}>
        <h1>Olá, eu sou a Pamela Lima <span>.</span></h1>
        <p className={styles.presentation_subtitle}>Desenvolvedora Full Stack</p>

        <div className={styles.presentation_techs}>
        <SiNestjs />
        <BiLogoTypescript />
        <BiLogoPostgresql />
        <FaReact />
        <FaDocker />
        <FaAws />
        <FaGithub />
        </div>
      </div>
    </section>
  );
};
