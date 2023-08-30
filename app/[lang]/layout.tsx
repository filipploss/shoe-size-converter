"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Locale } from "@/i18n.config";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import Script from "next/script";
import { theme } from "../[lang]/theme";
import "./globals.css";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang={lang}>
        <head>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WCS9WXQD');        
          `}
          </Script>
        </head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCS9WXQD" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
            }}
          />
          <Header lang={lang} />
          <Breadcrumbs />
          <Box
            alignItems="center"
            border="1px solid red"
            display="flex"
            flexDirection="column"
            minHeight="calc(100vh - 181px)"
            padding="60px 20px 20px"
          >
            {children}
          </Box>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
