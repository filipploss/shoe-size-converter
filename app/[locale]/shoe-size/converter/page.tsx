import Converter from "./Converter";
import { Locale, i18n } from "@/i18n.config";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Box from "@mui/material/Box";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslator(locale, "shoeSizeConverter.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Page({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = useTranslations("shoeSizeConverter");
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
      <Typography
        sx={{
          "&:first-of-type": {
            marginTop: 0,
          },
          marginTop: "1.5rem",
        }}
        variant="h2"
        gutterBottom
      >
        {chunks}
      </Typography>
    ),
    b: (chunks) => <b>{chunks}</b>,
    br: () => <br />,
    p: (chunks) => <Typography gutterBottom>{chunks}</Typography>,
    strong: (chunks) => <strong>{chunks}</strong>,
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
    <>
      <Converter locale={locale} />
      <Box maxWidth="700px"> {text}</Box>
    </>
  );
}
