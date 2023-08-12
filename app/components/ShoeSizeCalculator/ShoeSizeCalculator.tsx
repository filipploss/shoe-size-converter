"use client";

import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import StandardsSelect from "../Select";
import { calculate } from "./formulas";
import { standards, genders } from "../dictionaries";
import { IStandard } from "../types";

const ShoeSizeCalculator: FC = () => {
  const [currentStandard, setCurrentStandard] = useState<IStandard>(
    standards[0].label.toLowerCase()
  );
  const [expectedStandard, setExpectedStandard] = useState(
    standards[1].label.toLowerCase()
  );
  const [gender, setGender] = useState(genders[0].label);
  const [result, setResult] = useState("");
  const [size, setSize] = useState<null | number>();

  useEffect(() => {
    setResult(
      calculate({
        currentStandard: currentStandard.toLowerCase(),
        expectedStandard: expectedStandard.toLowerCase(),
        gender,
        size,
      })
    );
  }, [currentStandard, expectedStandard, gender, size]);

  return (
    <Box
      alignItems="center"
      border="1px solid red"
      display="flex"
      flexDirection="column"
      height="80vh"
      padding="20px"
      width="100vh"
    >
      <Box marginBottom="100px">Convert your shoe size</Box>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap="20px"
        height="100%"
      >
        <Box display="flex" alignItems="center" gap="10px">
          <Box>Сonvert from</Box>
          <TextField
            onChange={(e) => setSize(Number(e.target.value))}
            sx={{ width: "80px" }}
            type="number"
            value={size}
            variant="standard"
            inputProps={{
              max: 100,
              min: 1,
              style: { textAlign: "center" },
            }}
          />
          <StandardsSelect
            type="standardCurrent"
            onChange={setCurrentStandard}
          />
          <StandardsSelect type="gender" onChange={setGender} />
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <Box>to</Box>
          <StandardsSelect
            type="standardExpected"
            onChange={setExpectedStandard}
          />{" "}
          =
          <TextField
            id="result"
            value={result || ""}
            sx={{ width: "80px", textAlign: "center" }}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ShoeSizeCalculator;
