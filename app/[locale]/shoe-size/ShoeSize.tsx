import { Box, List, ListItem, Typography } from "@mui/material/";
import Link from "next/link";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { Locale, i18n } from "@/i18n.config";

interface IProps {
  locale: Locale;
}

const ShoeSize: FC<IProps> = ({ locale }) => {
  const t = useTranslations("shoeSize");
  const localePath = locale === i18n.defaultLocale ? "/" : `/${locale}/`;

  const text = t.rich("text", {
    h1: (chunks) => (
      <Typography
        fontSize={30}
        fontWeight={700}
        marginBottom="1rem"
        variant="h1"
      >
        {chunks}
      </Typography>
    ),
    h2: (chunks) => (
      <Typography variant="h2" gutterBottom marginTop="1.5rem">
        {chunks}
      </Typography>
    ),
    b: (chunks) => <b>{chunks}</b>,
    br: () => <br />,
    p: (chunks) => <Typography gutterBottom>{chunks}</Typography>,
    ul: (chunks) => (
      <Typography component="div" gutterBottom>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
            pl: 2,
          }}
        >
          {chunks}
        </List>
      </Typography>
    ),
    ol: (chunks) => (
      <Typography component="div" gutterBottom>
        <List
          sx={{
            listStyleType: "decimal",
            listStylePosition: "inside",
            pl: 2,
          }}
        >
          {chunks}
        </List>
      </Typography>
    ),
    li: (chunks) => <ListItem sx={{ display: "list-item" }}>{chunks}</ListItem>,
    Link: (chunks) => (
      <Link
        href={`${localePath}` + t("shoeSizeConverterLink")}
        style={{
          textDecoration: "underline",
          // "&:hover": {
          //   color: "secondary.main"
          // }
        }}
      >
        {chunks}
      </Link>
    ),
  });

  return <Box maxWidth="700px">{text}</Box>;
};

export default ShoeSize;
