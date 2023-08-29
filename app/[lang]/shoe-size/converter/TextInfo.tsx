import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface IProps {
  text: any;
}

const TextInfo: FC<IProps> = ({ text }) => {
  const { text1, text2, text3, text4, text5, text6 } = text;
  return (
    <Box maxWidth="700px">
      <Typography variant="h2">{text1.title}</Typography>
      <Typography gutterBottom>{text1.p1}</Typography>
      <Typography gutterBottom>{text1.p2}</Typography>
      <Typography variant="h2" gutterBottom>
        {text2.title}
      </Typography>
      <Typography gutterBottom>{text2.p1}</Typography>
      <Typography variant="h2" gutterBottom>
        {text3.title}
      </Typography>
      <Typography gutterBottom>{text3.p1}</Typography>
      <Typography gutterBottom>{text3.p2}</Typography>
      <Typography variant="h2" gutterBottom>
        {text4.title}
      </Typography>
      <Typography gutterBottom>{text4.p1}</Typography>
      <Typography gutterBottom>{text4.p2}</Typography>
      <Typography variant="h2" gutterBottom>
        {text5.title}
      </Typography>
      <Typography gutterBottom>{text5.p1}</Typography>
      <Typography variant="h2" gutterBottom>
        {text6.title}
      </Typography>
      <Typography gutterBottom>{text6.p1}</Typography>
      <Typography gutterBottom>{text6.p2}</Typography>
    </Box>
  );
};

export default TextInfo;
