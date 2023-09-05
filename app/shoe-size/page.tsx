import ShoeSize from "./ShoeSize";
import { getDictionary } from "../lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { shoeSize } = await getDictionary(lang);
  return <ShoeSize text={shoeSize} />;
}
