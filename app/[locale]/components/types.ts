export type TStandard = { option: string; label: string };
export type TGender = { option: string; label: string };

export interface ICalculate {
  currentStandard: TStandard;
  expectedStandard: TStandard;
  gender: TGender;
  size: string | number;
}

export interface IResult {
  size: string | number;
  system: string;
  women: boolean;
  children: boolean;
}
