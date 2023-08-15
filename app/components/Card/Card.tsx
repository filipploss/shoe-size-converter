import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Card: FC<Props> = ({ children, title }) => {
  return (
    <Paper elevation={3} sx={{ padding: "15px", minHeight: "400px" }}>
      <Paper
        elevation={2}
        sx={{
          background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
          color: "#FFFFFF",
          margin: "-45px 0 50px",
          minHeight: "85px",
          padding: "15px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      </Paper>
      <Box padding="0 5px">{children}</Box>
    </Paper>
  );
};

export default Card;
