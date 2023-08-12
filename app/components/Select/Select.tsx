"use client";

import React, { FC, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { standards, genders } from "../dictionaries";

type Props = {
  type: "standardCurrent" | "standardExpected" | "gender";
  onChange?: Dispatch<SetStateAction<string>>;
};

const Select: FC<Props> = ({ onChange, type }) => {
  return (
    <Autocomplete
      id="standards-select"
      sx={{ width: 120 }}
      options={
        ["standardCurrent", "standardExpected"].includes(type)
          ? standards
          : genders
      }
      defaultValue={
        type === "standardCurrent"
          ? standards[0]
          : type === "standardExpected"
          ? standards[1]
          : genders[0]
      }
      autoHighlight
      disableClearable
      onChange={(e, value) => {
        console.log("value", value);
        return onChange(value.label);
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
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
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
            }, // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default Select;
