"use client";
import { Locale, i18n } from "@/i18n.config";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "../LanguageSwitcher";

export default function StickyFooter({ locale }: { locale: Locale }) {
  const isLanguageVisible = useMediaQuery("(max-width:435px)");
  const localePath = locale === i18n.defaultLocale ? "/" : `/${locale}/`;
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {isLanguageVisible && <LanguageSwitcher locale={locale} />}
        <Typography variant="body2" color="primary">
          {"Copyright © "}
          <Link color="primary" href={localePath}>
            ConvertXpert.com
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
