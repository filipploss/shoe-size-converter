"use client";

import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "../components/Select";
import { calculate } from "./formulas";
import { standards, genders } from "../components/dictionaries";
import { TStandard, TGender } from "../components/types";

const ShoeSizeCalculator: FC = () => {
  const [currentStandard, setCurrentStandard] = useState<TStandard>(
    standards[0]
  );
  const [expectedStandard, setExpectedStandard] = useState<TStandard>(
    standards[1]
  );
  const [gender, setGender] = useState<TGender>(genders[0]);
  const [result, setResult] = useState("");
  const [size, setSize] = useState<null | number>(null);

  useEffect(() => {
    setResult(
      calculate({
        currentStandard: currentStandard,
        expectedStandard: expectedStandard,
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
      // width="100vh"
    >
      <Box marginBottom="100px">Convert your shoe size</Box>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap="20px"
        height="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="10px"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box>Сonvert from</Box>
          <Box
            display="flex"
            gap="10px"
            flexWrap="wrap"
            justifyContent="center"
          >
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
            <Select type="standardCurrent" onChange={setCurrentStandard} />
            <Select type="gender" onChange={setGender} />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <Box>to</Box>
          <Select type="standardExpected" onChange={setExpectedStandard} /> =
          <TextField
            id="result"
            value={(size && result) || ""}
            sx={{ width: "80px" }}
            InputProps={{
              readOnly: true,
            }}
            inputProps={{
              style: {
                textAlign: "center",
                fontWeight: 600,
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ShoeSizeCalculator;
