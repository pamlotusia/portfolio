import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { Experience } from "../../components/Experience/Experience";
import { Formation } from "../../components/Formation/Formation";
import styles from "./Main.module.css"

export const Main = () => {
  return (
    <div>
      <About/>
      <Experience />
      <Formation />
      <Contact/>

     <p className={styles.footer}>©2025 | Pamela Lima</p> 
    </div>
  );
};
