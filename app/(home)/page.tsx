import Header from "@/components/Header";
import styles from "./page.module.css";
import { getBillionaries } from "@/helper";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const billionaries = await getBillionaries();

  return (
    <div className={styles.page}>
      <Header text="Billionaries" />
      <main>
        <ul className={styles.list}>
          {billionaries.map((billion) => {
            return (
              <li key={billion.id}>
                <Link href={`/person/${billion.id}`}>
                  <Image
                    src={billion.squareImage}
                    alt={billion.name}
                    width="200"
                    height="200"
                  />
                  <span>{billion.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
