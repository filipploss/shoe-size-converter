"use client";
import { i18n } from "@/i18n.config";
import { Autocomplete, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Autocomplete
      // autoSelect
      disablePortal
      defaultValue={i18n.defaultLocale}
      disableClearable
      id="language-switcher"
      options={i18n.locales}
      size="small"
      // sx={{ width: 100 }}
      onChange={(e, value) => {
        console.log("value", value);
        router.push(redirectedPathName(String(value)));
      }}
      renderInput={(params) => {
        return <TextField {...params} label="Language" />;
      }}
    />
  );
}
