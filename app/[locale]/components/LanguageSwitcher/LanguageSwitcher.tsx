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

    locales.includes(segments[1] as Locale)
      ? (segments[1] = locale)
      : segments.splice(1, 0, locale);
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
      sx={{ width: "110px" }}
      onChange={(e, value) => {
        router.push(redirectedPathName(value));
      }}
      renderInput={(params) => {
        return <TextField {...params} label="Language" size="small" sx={{color: 'red'}}/>;
      }}
    />
  );
}
