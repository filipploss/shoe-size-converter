"use client";

import { Locale } from "@/i18n.config";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTranslations } from "next-intl";
import { FC, useEffect, useState } from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";
import { genders, standards } from "../../components/dictionaries";
import { TGender, TStandard } from "../../components/types";
import { calculate } from "./formulas";

const Converter: FC = ({ locale }: { locale: Locale }) => {
  const t = useTranslations("shoeSizeConverter.converter");
  const [currentStandard, setCurrentStandard] = useState<TStandard>(
    standards[`${locale}`].us
  );
  const [expectedStandard, setExpectedStandard] = useState<TStandard>(
    standards[`${locale}`].eu
  );

  function getObjectKey(obj, value: string) {
    // console.log("getObj value", value);
    // // console.log("getObj value.toLowerCase()", value);
    return Object.keys(obj).find((key) => obj[key] === value);
  }
  const [gender, setGender] = useState<TGender>(genders[`${locale}`].men);

  const genderResult = getObjectKey(genders[`${locale}`], gender);
  const currentStandardResult = getObjectKey(
    standards[`${locale}`],
    currentStandard
  );
  const currentExpectedStandard = getObjectKey(
    standards[`${locale}`],
    expectedStandard
  );
  const [result, setResult] = useState("");
  const [size, setSize] = useState<null | number>(null);
  console.log("state gender", gender);
  console.log("genderResult", genderResult);
  useEffect(() => {
    // console.log(
    //   calculate({
    //     currentStandard: currentStandardResult,
    //     expectedStandard: currentExpectedStandard,
    //     // gender,
    //     gender: genderResult,
    //     // getObjectKey(genders[`${locale}`], gender)
    //     size,
    //   })
    // );
    setResult(
      calculate({
        currentStandard: currentStandardResult,
        expectedStandard: currentExpectedStandard,
        // gender,
        gender: genderResult,
        // getObjectKey(genders[`${locale}`], gender)
        size,
      })
    );
  }, [
    currentStandardResult,
    currentExpectedStandard,
    gender,
    size,
    genderResult,
  ]);

  return (
    <>
      <Card title={t("title")}>
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
              <Box>{t("from")}</Box>
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
                <Select
                  type="standardCurrent"
                  onChange={setCurrentStandard}
                  locale={locale}
                />
                <Select type="gender" onChange={setGender} locale={locale} />
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap="10px">
              <Box>{t("to")}</Box>
              <Select
                type="standardExpected"
                onChange={setExpectedStandard}
                locale={locale}
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
    </>
  );
};

export default Converter;
