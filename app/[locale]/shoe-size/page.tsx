import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import ShoeSize from "./ShoeSize";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslator(locale, "shoeSize.metadata");

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
  return <ShoeSize locale={locale} />;
}
