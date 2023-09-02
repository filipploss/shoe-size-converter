import { Locale } from "@/i18n.config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { getDictionary } from "./lib/dictionary";
import styles from "./page.module.css";

export const metadata = {
  title: "Convert Like an Expert",
  description:
    "Explore the best shoe size, weight, clothing size, and distance converters all in one place. Simplify your conversions for a seamless experience.",
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { home } = await getDictionary(lang);
  return (
    <main className={styles.main}>
      <Box maxWidth="700px">
        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={30}
          marginBottom="1rem"
        >
          {home.title}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {home.text1}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {home.text2.title}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {home.text2.p1}{" "}
          <Link
            href={`${lang}/shoe-size/converter`}
            style={{ textDecoration: "underline" }}
          >
            {home.text2.link}
          </Link>
          {home.text2.p2}
        </Typography>
        <Typography variant="h2" gutterBottom>
        {home.text3.title}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
        {home.text3.p1}
        </Typography>
        <Typography variant="h2" gutterBottom>
        {home.text4.title}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
        {home.text4.p1}
        </Typography>
      </Box>
      {/* <div className={styles.description}> */}
      {/* <Link href={`${lang}/shoe-size/converter`}>{home.title}</Link> */}
      {/* </div> */}
    </main>
  );
}
