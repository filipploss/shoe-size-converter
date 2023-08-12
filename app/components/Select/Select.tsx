"use client";

import React, { FC, Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { standards, genders } from "../dictionaries";
import { TStandard, TGender } from "../types";

type Props = {
  type: "standardCurrent" | "standardExpected" | "gender";
  onChange?: Dispatch<SetStateAction<TStandard | TGender>>;
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
      onChange={(e, value) => onChange(value)}
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
          {((type === "gender" || ["cm", "inches"].includes(option)) &&
            option) ||
            option.toUpperCase()}
        </Box>
      )}
      renderInput={(params) => {
        console.log("params", params);
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
