import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FC, useEffect, useState } from "react";
import Card from "@/components/Card";
import Select from "@/components/Select";
import { genders, standards } from "@/components/dictionaries";
import { TGender, TStandard } from "@/components/types";
import { calculate } from "./formulas";
import TextInfo from "./TextInfo";
import { Locale } from "@/i18n.config";
import { getDictionary } from "../../../lib/dictionary";
import Converter from './Converter'

const ConverterContainer: FC = () => {
  // const { shoeSizeConverter } = await getDictionary(lang);
  // const

  return <Converter />;
};

export default ConverterContainer;
