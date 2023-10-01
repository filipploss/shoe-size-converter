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
      ? standards[`${locale}`][0]
      : type === "standardExpected"
      ? standards[`${locale}`][1]
      : genders[`${locale}`][0];
  return (
    <Autocomplete
      id={type}
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
        onChange(value);
      }}
      getOptionLabel={(option) => {
        return option.label;
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          aria-label={option.label}
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
          {option.label}
        </Box>
      )}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
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
