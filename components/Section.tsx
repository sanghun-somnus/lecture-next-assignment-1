import Card from "./Card";
import styles from "./Section.module.css";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <section className={styles.section}>{children}</section>
    </Card>
  );
}
