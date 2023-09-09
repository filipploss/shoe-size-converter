import { Locale, i18n } from "@/i18n.config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslator(locale, "home.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = useTranslations("home");

  const localePath = locale === i18n.defaultLocale ? "/" : `/${locale}/`;

  const text2p1 = t.rich("text2.p1", {
    Link: (chunks) => (
      <Link
        href={`${localePath}shoe-size/converter`}
        style={{ textDecoration: "underline" }}
      >
        {chunks}
      </Link>
    ),
  });
  return (
    <main className={styles.main}>
      <Box maxWidth="700px">
        <Typography
          fontSize={30}
          fontWeight={700}
          marginBottom="1rem"
          variant="h1"
        >
          {t("title")}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {t("text1")}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {t("text2.title")}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {text2p1}
          {t("text2.p2")}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {t("text3.title")}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {t("text3.p1")}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {t("text4.title")}
        </Typography>
        <Typography gutterBottom marginBottom="1.5rem">
          {t("text4.p1")}
        </Typography>
      </Box>
    </main>
  );
}
