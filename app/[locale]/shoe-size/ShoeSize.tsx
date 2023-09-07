import { Box, List, ListItem, Typography } from "@mui/material/";
import Link from "next/link";
import { FC } from "react";
import {useTranslations} from 'next-intl';

interface IProps {
  // text: any;
}

// const ShoeSize: FC<IProps> = async ({ text }) => {
const ShoeSize: FC<IProps> = () => {
  // TODO: add i18n link\
  const t = useTranslations('shoeSize');
  // const { title, text1, text2, text3, text4, text5, text6 } = text;
  return (
    <>
      <Box maxWidth="700px">
        <Box marginBottom="1.5rem">
          <Typography
            fontSize={30}
            fontWeight={700}
            marginBottom="1rem"
            variant="h1"
          >
             {t('title')}
          </Typography>
          <Typography gutterBottom>{t('text1.p1')}</Typography>
        </Box>
        <Box marginBottom="1.5rem">
          <Typography variant="h2" gutterBottom>
            {/* {text2.title} */}
          </Typography>
          {/* <Typography gutterBottom>{text2.p1}</Typography> */}
          {/* <Typography component="div" gutterBottom>
            <List
              sx={{
                listStyleType: "disc",
                listStylePosition: "inside",
                pl: 2,
              }}
            >
              <ListItem sx={{ display: "list-item" }}>
                {<b>{text2.l1p1}</b>}
                {text2.l1p2}
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {<b>{text2.l2p1}</b>}
                {text2.l2p2}
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                {<b>{text2.l3p1}</b>}
                {text2.l3p2}
                <Link
                  href={`/shoe-size/converter`}
                  style={{ textDecoration: "underline" }}
                >
                  shoe size converter
                </Link>
                {text2.l3p3}
              </ListItem>
            </List>
          </Typography> */}
        </Box>
        <Box marginBottom="1.5rem">
          {/* <Typography variant="h2" gutterBottom>
            {text3.title}
          </Typography>
          <Typography gutterBottom>{text3.p1}</Typography>
          <Typography gutterBottom>{text3.p2}</Typography> */}
        </Box>
        {/* <Typography component="div" gutterBottom>
          <List
            sx={{
              listStyleType: "decimal",
              listStylePosition: "inside",
              pl: 2,
            }}
          >
            <ListItem sx={{ display: "list-item" }}>
              {<b>{text4.l1p1}</b>}
              {text4.l1p2}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {<b>{text4.l2p1}</b>}
              {text4.l2p2}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {<b>{text4.l3p1}</b>}
              {text4.l3p2}
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              {<b>{text4.l4p1}</b>}
              {text4.l4p2}
              <Link
                href={`/shoe-size/converter`}
                style={{ textDecoration: "underline" }}
              >
                shoe size calculator
              </Link>
              {text4.l4p3}
            </ListItem>
          </List>
        </Typography> */}
        {/* <Box marginBottom="1.5rem">
          <Typography variant="h2" gutterBottom>
            {text5.title}
          </Typography>
          <Typography gutterBottom>{text5.p1}</Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default ShoeSize;
