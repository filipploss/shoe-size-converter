import Link from "next/link";
import styles from "./page.module.css";
import { Locale } from "@/i18n.config";
import { getDictionary } from "../lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { home } = await getDictionary(lang);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href={`${lang}/shoe-size/converter`}>{home.title}</Link>
      </div>
    </main>
  );
}
