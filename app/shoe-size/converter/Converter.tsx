"use client";

import Card from "@/components/Card";
import Select from "@/components/Select";
import { genders, standards } from "@/components/dictionaries";
import { TGender, TStandard } from "@/components/types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FC, useEffect, useState } from "react";
import TextInfo from "./TextInfo";
import { calculate } from "./formulas";

interface IProps {
  text: any;
}

const Converter: FC<IProps> = ({ text }) => {
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
        currentStandard,
        expectedStandard,
        gender,
        size,
      })
    );
  }, [currentStandard, expectedStandard, gender, size]);

  return (
    <>
      <Card title={text?.title}>
        <>
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
              <Select
                type="standardExpected"
                onChange={setExpectedStandard}
              />{" "}
              =
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
        </>
      </Card>
      <TextInfo text={text} />
    </>
  );
};

export default Converter;
