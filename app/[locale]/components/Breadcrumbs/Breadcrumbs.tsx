"use client";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import Crumb from "./components/Crumb";
import { i18n, Locale } from "@/i18n.config";

export default function BasicBreadcrumbs({ locale }: { locale: Locale }) {
  const { locales, defaultLocale } = i18n;
  const localePath = locale === defaultLocale ? "/" : `/${locale}/`;
  const pathname = usePathname();

  const pathToText = (text: string) => {
    const str = text.replaceAll("-", " ");
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const breadcrumbs = useMemo(() => {
    const asPathWithoutQuery = pathname.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v: Locale) => v.length > 0 && !locales.includes(v));
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = localePath + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // const href = `/` + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return { href, text: pathToText(subpath) };
    });

    return [{ href: localePath, text: "Home" }, ...crumblist];
    // return [{ href: `/`, text: "Home" }, ...crumblist];
  }, [pathname, locales, localePath]);

  if (
    pathname === "/" ||
    locales.some((el) => el === pathname.replace("/", ""))
  )
    return null;

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="›"
      sx={{ padding: "10px 24px", fontSize: "14px" }}
    >
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
}