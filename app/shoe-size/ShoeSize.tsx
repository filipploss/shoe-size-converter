import { FC } from "react";
import Link from "next/link";
import { i18n } from "@/i18n.config";

const ShoeSize: FC = () => {
  // TODO: add i18n link
  return (
    <Link
      href={`/shoe-size/converter`}
      style={{ textDecoration: "underline" }}
    >
      Shoe size converter
    </Link>
  );
};

export default ShoeSize;
