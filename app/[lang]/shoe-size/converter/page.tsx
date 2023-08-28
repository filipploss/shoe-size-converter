import { Locale } from "@/i18n.config";
import { getDictionary } from "../../../lib/dictionary";
import Converter from "./Converter";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { shoeSizeConverter } = await getDictionary(lang);
  return <Converter text={shoeSizeConverter} />;
}
