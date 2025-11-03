import { FaLinkedin } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";


import { ContactCard } from "../ContactCard/ContactCard"
import { Title } from "../Title/Title"
import styles from "./Contact.module.css"

export const Contact = () => {
 return (
  <section> 
  <Title title="Contato"/>
  <p className={styles.contact_description}>Entre em contato ou me siga nas redes sociais!</p>

  <div className={styles.contact_container}>
    <ContactCard
    image={<FaWhatsapp />}
    title="Whatsapp"
    link="https://wa.me/5511984097584?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20mais%20informações!"
  />


  <ContactCard
    image={<FaLinkedin />}
    title="LinkedIn"
    link="https://www.linkedin.com/in/pamelajlima"
  />

    <ContactCard
    image={<PiGithubLogoLight />}
    title="GitHub"
    link="https://github.com/pamlotusia"
  />

    <ContactCard
    image={<AiOutlineMail />}
    title="E-mail"
    link="mailto:pamela.jesus.lima@gmail.com"
  />

  </div>
  </section> 
 )
}