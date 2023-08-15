import Breadcrumbs from "@mui/material/Breadcrumbs";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import Crumb from "./components/Crumb";

export default function BasicBreadcrumbs() {
  const pathname = usePathname();

  const pathToText = (text: string) => {
    const str = text.replaceAll("-", " ");
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const breadcrumbs = useMemo(() => {
    const asPathWithoutQuery = pathname.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return { href, text: pathToText(subpath) };
    });

    return [{ href: "/", text: "Home" }, ...crumblist];
  }, [pathname]);

  if (pathname === "/") return null;

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
