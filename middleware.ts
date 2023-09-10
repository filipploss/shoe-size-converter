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
  // async rewrites() {
  //   return [
  //     {
  //       source: '/talla-de-zapato/:path*',
  //       destination: '/shoe-size', // The :path parameter isn't used here so will be automatically passed in the query
  //     },
  //   ]
  // },
  // pathnames: {
  //   '/shoe-size': {
  //     es: '/talla-de-zapato'
  //   },
  // },
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  //   matcher: ['/((?!api|_next|.*\\..*).*)']
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|apple-touch-icon.png).*)",
  ],
};
