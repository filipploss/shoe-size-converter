"use client";

import { Locale } from "@/i18n.config";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Dispatch, FC, SetStateAction } from "react";
import { genders, standards } from "../dictionaries";
import { TGender, TStandard } from "../types";

type Props = {
  locale: Locale;
  onChange?: Dispatch<SetStateAction<TStandard | TGender>>;
  type: "standardCurrent" | "standardExpected" | "gender";
};

const Select: FC<Props> = ({ onChange, type, locale }) => {
  const defaultValue =
    type === "standardCurrent"
      ? standards[`${locale}`].us
      : type === "standardExpected"
      ? standards[`${locale}`].eu
      : genders[`${locale}`].men;

  return (
    <Autocomplete
      id="select"
      sx={{ width: 100 }}
      options={
        ["standardCurrent", "standardExpected"].includes(type)
          ? Object.values(standards[`${locale}`])
          : Object.values(genders[`${locale}`])
      }
      defaultValue={defaultValue}
      autoHighlight
      disableClearable
      onChange={(e, value) => {
        console.log("value", value);
        onChange(value);
      }}
      // getOptionLabel={(option) => {
      //   return option.label;
      // }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {/* <img
          loading="lazy"
          width="20"
          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          alt=""
        /> */}
          {/* {((type === "gender" || ["cm", "inches"].includes(option)) &&
            option) ||
            option.toUpperCase()} */}
          {option}
        </Box>
      )}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            // label="Choose a standard"
            variant="standard"
            sx={{ textAlign: "center" }}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
              style: {
                textAlign: "center",
                ...(type !== "gender" &&
                  !(
                    params.inputProps.value === "cm" ||
                    params.inputProps.value === "inches"
                  ) && {
                    textTransform: "uppercase",
                  }),
              },
            }}
          />
        );
      }}
    />
  );
};

export default Select;
