import { Title } from "../Title/Title";
import styles from './About.module.css'
import image from '../../assets/vermelho.jpeg'
export const About = () => {
  return (
    <section id="about">
      <Title title="Sobre mim" />

      <div className={styles.about_container}>
        <img className={styles.about_image} src={image} alt="" />
        <div className={styles.about_text}>
          <p>
            <span>Desenvolvedora Full-stack</span> especializada em criar
            aplicações web completas e escaláveis. Trabalho tanto no frontend
            quanto no backend, garantindo soluções modernas, rápidas e seguras.
          </p>
          <p>
            Tenho experiência em fintechs, e-commerces e plataformas digitais
            sob demanda, desenvolvendo desde sistemas complexos até interfaces
            intuitivas e responsivas. Meu foco é transformar ideias em produtos
            que entreguem valor real, combinando performance, usabilidade e boas
            práticas de código.
          </p>
          <p>
            Busco desafios que permitam inovar e gerar resultados concretos para clientes e empresas.
          </p>
        </div>
      </div>
    </section>
  );
};
