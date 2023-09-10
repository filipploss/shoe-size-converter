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

  const text = t.rich("text", {
    h1: (chunks) => (
      <Typography
        fontSize={30}
        fontWeight={700}
        marginBottom="1rem"
        variant="h1"
      >
        {chunks}
      </Typography>
    ),
    h2: (chunks) => (
      <Typography variant="h2" gutterBottom marginTop="1.5rem">
        {chunks}
      </Typography>
    ),
    b: (chunks) => <b>{chunks}</b>,
    br: () => <br />,
    p: (chunks) => <Typography gutterBottom>{chunks}</Typography>,
    Link: (chunks) => (
      <Link
        href={`${localePath}` + t("shoeSizeConverterLink")}
        style={{ textDecoration: "underline" }}
      >
        {chunks}
      </Link>
    ),
  });

  return (
    <main className={styles.main}>
      <Box maxWidth="700px">{text}</Box>
    </main>
  );
}
