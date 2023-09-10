const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl({
  // async rewrites() {
  //   return [
  //     {
  //       source: "/es/talla-de-zapato",
  //       destination: "/shoe-size", // The :path parameter isn't used here so will be automatically passed in the query
  //     },
  //     {
  //       source: "/es/talla-de-zapato/conversor",
  //       destination: "/shoe-size", // The :path parameter isn't used here so will be automatically passed in the query
  //     },
  //   ];
  // },
  // pathnames: {
  //   "/shoe-size": {
  //     es: "/talla-de-zapato",
  //   },
  // },
  // Other Next.js configuration ...
});
