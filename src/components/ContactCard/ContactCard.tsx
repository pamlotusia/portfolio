import type { JSX } from "react";
import styles from "./ContactCard.module.css";
import { HiArrowUpRight } from "react-icons/hi2";

export const ContactCard = ({
  image,
  title,
  link,
}: {
  image: JSX.Element;
  title: string;
  link: string;
}) => {
  return (
    <div className={styles.contact_card}>
      <div className={styles.contact_card_title}>
        <i>{image}</i>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>

      <i><HiArrowUpRight /></i>
    </div>
  );
};
