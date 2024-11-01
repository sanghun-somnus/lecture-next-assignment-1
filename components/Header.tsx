import styles from "./Header.module.css";
export default function Header({ text }: { text: string }) {
  return <h1 className={styles.header}>{text}</h1>;
}
