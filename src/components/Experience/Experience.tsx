import { JobExperience } from "../JobExperience/JobExperience";
import { Title } from "../Title/Title";

export const Experience = () => {
  return (
    <section id="experience">
      <Title title="Experiência" />
      <JobExperience
        duration="Jan 2025 - Atual"
        company="Aion Group"
        description="Desenvolvimento de soluções para fintechs que utilizam tecnologia
            blockchain, atuando na definição da arquitetura da aplicação,
            modelagem e normalização de bancos de dados e desenvolvimento. Ao
            longo da minha trajetória, criei e documentei APIs utilizando
            Nest.js, Prisma, gRPC PostgreSQL e Swagger, garantindo que a
            comunicação entre sistemas fosse eficiente e bem estruturada.
            Implementação de testes unitários com Jest e políticas de segurança
            para assegurar a confiabilidade das aplicações. Além disso,
            participei da gestão de equipes de desenvolvimento, apoiando
            processos de maturidade interna e promovendo boas práticas de
            desenvolvimento."
      />

      <JobExperience
        duration="Jun 2023 – Dez 2024"
        company="Freelancer"
        description="Desenvolvimento de soluções de software sob medida, como E-commerce, implementação 
        e manutenção de CRM, landingpages e sistemas web. Atuação direta com clientes para entender suas
         necessidades e entregar soluções eficazes que atendam aos seus objetivos de negócio."
      />
    </section>
  );
};
