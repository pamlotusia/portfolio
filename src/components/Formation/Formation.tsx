import { Education } from "../Education/Education";
import { Title } from "../Title/Title";
import fiap from "./../../assets/fiap.png";
import impacta from './../../assets/impacta.png'

export const Formation = () => {
  return (
    <section>
      <Title title="Formação" />
      <Education
        image={fiap}
        title="Defensive Cyber Security - Blue Team Operations"
        duration="Jun 2025 - Abr 2026"
        institution="FIAP"
      />

      <Education
        image={impacta}
        title="Ánalise e Desenvolvimento de Sistemas"
        duration="Jan 2022 - Jun 2024"
        institution="FIT"
      />
    </section>
  );
};
