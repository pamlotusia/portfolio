import { motion } from "framer-motion";
import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { Experience } from "../../components/Experience/Experience";
import { Formation } from "../../components/Formation/Formation";
import { Header } from "../../components/Header/Header";
import { Presentation } from "../../components/Presentation/Presentation";
import Technologies from "../../components/Technologies/Technologies";
import WhatsAppButton from "../../components/WhatsappButton/WhatsappButton";
import styles from "./Main.module.css";

export const Main = () => {
  const sections = [
    <Header key="header" />,
    <Presentation key="presentation" />,
    <Technologies
      key="tech"
      items={[
        "Node","Nest","React","TypeScript","PostgreSQL","JWT",
        "gRPC","Kafka","JavaScript","Git","Tailwind CSS","Next",
        "ReactNative","Docker","AWS","Prisma"
      ]}
      speed={120}
      className="bg-gray-50 rounded-lg"
    />,
    <About key="about" />,
    <Experience key="exp" />,
    <Formation key="form" />,
    <Contact key="contact" />,
    <p key="footer" className={styles.footer}>©2025 | Pamela Lima</p>
  ];

  return (
    <div className={styles.main_container}>
      <WhatsAppButton />

      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.6 }}
        >
          {section}
        </motion.div>
      ))}
    </div>
  );
};
