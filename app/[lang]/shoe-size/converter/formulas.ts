// @ts-ignore
import { convert, iso } from "shoe-size-converter";
import { ICalculate, IResult } from "@/components/types";

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

  if (expectedStandard === "inches") {
    return (
      result.find((item: IResult) => item.system === "mondopoint").size / 25.4
    ).toFixed(1);
  } else {
    return result.find((item: IResult) => item.system === expectedStandard)
      .size;
  }
};
