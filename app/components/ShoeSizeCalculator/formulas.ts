import { convert, iso } from "shoe-size-converter";
import { ICalculate } from "../types";

export const calculate = ({
  currentStandard,
  expectedStandard,
  gender,
  size,
}: ICalculate) => {
  const result = convert(
    {
      size: currentStandard === "inches" ? size * 25.4 : size,
      system: currentStandard === "inches" ? "mondopoint" : currentStandard,
      women: gender === "Women",
      children: gender === "Children",
    },
    iso
  );
  console.log("expectedStandard", expectedStandard);
  console.log("result", result);

  if (expectedStandard === "inches") {
    return (
      result.find((item) => item.system === "mondopoint").size / 25.4
    ).toFixed(1);
  } else {
    return result.find((item) => item.system === expectedStandard).size;
  }
};
