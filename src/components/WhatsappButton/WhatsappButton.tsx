import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsappButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511984097584?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20mais%20informações!"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp_button}
      aria-label="Fale comigo no WhatsApp"
    >
      <FaWhatsapp size={42} />
    </a>
  );
}
