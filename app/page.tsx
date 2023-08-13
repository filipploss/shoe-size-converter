import ShoeSizeCalculator from "./shoe-size-calculator/ShoeSizeCalculator";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/shoe-size-calculator">Shoe size calculator</Link>
      </div>
    </main>
  );
}
