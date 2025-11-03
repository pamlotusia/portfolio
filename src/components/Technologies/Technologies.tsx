import styles from "./Technologies.module.css";

export default function Technologies({ items }: { items: string[] }) {
  return (
    <div className={styles.scroll_container}>
      <div className={styles.scroll_content}>
        {[...items, ...items].map((item, index) => (
          <span key={index} className={styles.scroll_item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
