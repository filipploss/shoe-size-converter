import { Locale } from "@/i18n.config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslator(locale, "home.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  const t = useTranslations("home");
  return (
    <main className={styles.main}>
      <Box maxWidth="700px">
        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={30}
          marginBottom="1rem"
        >
          {t("title")}
          {/* {home.title} */}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {/* {home.text1} */}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {/* {home.text2.title} */}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {/* {home.text2.p1}{" "} */}
          <Link
            href={`shoe-size/converter`}
            style={{ textDecoration: "underline" }}
          >
            {/* {home.text2.link} */}
          </Link>
          {/* {home.text2.p2} */}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {/* {home.text3.title} */}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {/* {home.text3.p1} */}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {/* {home.text4.title} */}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {/* {home.text4.p1} */}
        </Typography>
      </Box>
      {/* <div className={styles.description}> */}
      {/* <Link href={`${lang}/shoe-size/converter`}>{home.title}</Link> */}
      {/* </div> */}
    </main>
  );
}
