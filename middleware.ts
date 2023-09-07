import createMiddleware from "next-intl/middleware";

import { i18n } from "i18n.config";
const { locales, defaultLocale } = i18n;

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  //   matcher: ['/((?!api|_next|.*\\..*).*)']
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
