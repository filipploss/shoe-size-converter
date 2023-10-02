"use client";
import { Locale } from "@/i18n.config";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "../LanguageSwitcher";

export default function StickyFooter({ locale }: { locale: Locale }) {
  const isLanguageVisible = useMediaQuery("(max-width:435px)");
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
          <Link color="primary" href="/">
            ConvertXpert.com
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
