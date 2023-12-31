import createMiddleware from "next-intl/middleware";

import { i18n } from "i18n.config";
const { locales, defaultLocale } = i18n;

export default createMiddleware({ 
  locales,
  defaultLocale,
  pathnames: {
    "/shoe-size": {
      es: "/talla-de-zapato",
      en: "/shoe-size",
    },
    "/shoe-size/converter": {
      es: "/talla-de-zapato/conversor",
      en: "/shoe-size/converter",
    },
  },
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|apple-touch-icon.png).*)",
  ],
};
