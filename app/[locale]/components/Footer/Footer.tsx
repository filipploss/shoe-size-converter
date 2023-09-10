import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Locale, i18n } from "@/i18n.config";

export default function StickyFooter({ locale }: { locale: Locale }) {
  const { locales, defaultLocale } = i18n;
  const localePath = locale === defaultLocale ? "/" : `/${locale}/`;
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
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary">
          {"Copyright © "}
          <Link color="inherit" href={`https://convertxpert.com`}>
            ConvertXpert.com
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
