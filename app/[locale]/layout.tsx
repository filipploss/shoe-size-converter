import Box from "@mui/material/Box";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Script from "next/script";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
  params: { locale },
}: any) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const headersList = headers();
  const isProd = headersList.get("host").includes("convertxpert");
  
  return (
    <html lang={locale}>
      <head>
        {/* TODO: remove meta ahrefs */}
        <meta
          name="ahrefs-site-verification"
          content="b011a322cec79e0cc16b984f3bb4641c2c98e9d8391da6951953057d918223d6"
        />
        {isProd && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WCS9WXQD');        
        `}
          </Script>
        )}
      </head>
      <body>
        {isProd && (
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCS9WXQD" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
            }}
          />
        )}
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header locale={locale} />
            <Breadcrumbs locale={locale} />
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
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
