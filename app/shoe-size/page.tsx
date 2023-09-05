import ShoeSize from "./ShoeSize";
import { getDictionary } from "../lib/dictionary";
import { Locale } from "@/i18n.config";

export const metadata = {
  title: "Discovering Your Perfect Shoe Size: A Comprehensive Guide",
  description:
    "Step forward with confidence, knowing you have the perfect shoe size with our guide.",
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { shoeSize } = await getDictionary(lang);
  return <ShoeSize text={shoeSize} />;
}
