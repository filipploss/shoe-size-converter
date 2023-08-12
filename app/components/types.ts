export interface IStandard {
    label: "US" |"EU" | "UK" | "AU" | "BR" | "MX" | "cm" | "inches";
  }
  
  export interface IGender {
    label: "Men" |"Women" | "Children";
  }


  export interface ICalculate {
    currentStandard: IStandard;
    expectedStandard: IStandard;
    gender: IGender;
    size: number;
  }