"use client";
import { Locale } from "@/i18n.config";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "../LanguageSwitcher";

export default function StickyFooter({ locale }: { locale: Locale }) {
  const isMobile = useMediaQuery("(max-width:375px)");
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {isMobile && <LanguageSwitcher locale={locale} />}
        <Typography variant="body2" color="primary">
          {"Copyright © "}
          <Link color="primary" href={`https://convertxpert.com`}>
            ConvertXpert.com
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
