// @ts-ignore
import { convert, iso } from "shoe-size-converter";
import { ICalculate, IResult } from "../../components/types";

export const calculate = ({
  currentStandard,
  expectedStandard,
  gender,
  size,
}: ICalculate) => {
  const result = convert(
    {
      size: currentStandard.option === "inches" ? size || 0 * 25.4 : size,
      system: currentStandard.option === "inches" ? "mondopoint" : currentStandard.option,
      women: gender.option === "women",
      children: gender.option === "children",
    },
    iso
  );

  if (expectedStandard.option === "inches") {
    return (
      result.find((item: IResult) => item.system === "mondopoint").size / 25.4
    ).toFixed(1);
  } else {
    return result.find((item: IResult) => item.system === expectedStandard.option)
      .size;
  }
};
