import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  last: boolean;
  text: string;
};

const Crumb: FC<Props> = ({ text, href, last = false }) => {
  if (last) {
    return (
      <Typography color="text.primary" fontSize="14px">
        {text}
      </Typography>
    );
  }

  return (
    <Link
      href={href}
      style={{
        textDecoration: "underline",
        fontSize: 14,
        color: "inherit"
      }}
    >
      {text}
    </Link>
  );
};

export default Crumb;
