import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/shoe-size/converter">Shoe size converter</Link>
      </div>
    </main>
  );
}
