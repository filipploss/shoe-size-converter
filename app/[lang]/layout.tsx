"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Locale } from "@/i18n.config";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
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
        <body>
          <Header lang={lang}/>
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
