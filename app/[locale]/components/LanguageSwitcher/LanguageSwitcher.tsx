"use client";
import { i18n, Locale } from "@/i18n.config";
import { Autocomplete, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathName = usePathname();
  const { locales } = i18n;

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    console.log("locale", locale);
    console.log("segments", segments);
    console.log("pathName", pathName);
    // if (segments[1] === locale) return pathName;
    // если segment[1] не один из Locale, вставить после [0] locale

    locales.includes(segments[1] as Locale)
      ? (segments[1] = locale)
      : segments.splice(1, 0, locale);
    console.log("segments after", segments);
    // if (!pathName) return "/";
    return segments.join("/");
  };

  return (
    <Autocomplete
      disablePortal
      value={locale}
      defaultValue={i18n.defaultLocale}
      disableClearable
      id="language-switcher"
      options={i18n.locales}
      size="small"
      onChange={(e, value) => {
        router.push(redirectedPathName(value));
      }}
      renderInput={(params) => {
        return <TextField {...params} label="Language" />;
      }}
    />
  );
}
