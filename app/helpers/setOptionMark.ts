import { SelectedOptions } from "../page";

export const setOptionMark = (option: SelectedOptions) => {
  return option === "temp" ? "℃" : option === "humidity" ? "%" : "hPa";
};
