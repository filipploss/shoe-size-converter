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
    <Paper elevation={3} sx={{ padding: "1rem", minHeight: "400px", marginBottom: '3rem' }}>
      <Paper
        elevation={2}
        sx={{
          bgcolor: 'secondary.main',
          color: "#FFFFFF",
          margin: "-45px 0 50px",
          minHeight: "85px",
          padding: "1rem",
        }}
      >
        <Typography variant="h1" gutterBottom textAlign="center">
          {title}
        </Typography>
      </Paper>
      <Box padding="0 5px">{children}</Box>
    </Paper>
  );
};

export default Card;
