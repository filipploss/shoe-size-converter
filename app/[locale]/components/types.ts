export type TStandard =
  | "us"
  | "eu"
  | "uk"
  | "au"
  | "br"
  | "mx"
  | "cm"
  | "inches";

export type TGender = "Men" | "Women" | "Children";

export interface ICalculate {
  currentStandard: TStandard;
  expectedStandard: TStandard;
  gender: TGender;
  size: null | number;
}


export interface IResult {
  size: string | number;
  system: string;
  women: boolean;
  children: boolean;
  
}