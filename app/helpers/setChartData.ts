import { WeatherData } from "../interfaces/weatherData.interface";
import { SelectedOptions, SelectedPeriod } from "../page";
import { setOptionMark } from "./setOptionMark";

export const setChartData = (
  list: WeatherData[],
  option: SelectedOptions,
  period: SelectedPeriod,
) => {
  if (period === "day") {
    return [
      {
        day: list[0].dt_txt.replace(/-/g, "."),
        value: `${list[0].main[option]} ${setOptionMark(option)}`,
        mobile: 80,
      },
      {
        day: list[8].dt_txt.replace(/-/g, "."),
        value: `${list[8].main[option]} ${setOptionMark(option)}`,
        mobile: 200,
      },
      {
        day: list[16].dt_txt.replace(/-/g, "."),
        value: `${list[16].main[option]} ${setOptionMark(option)}`,
        mobile: 120,
      },
      {
        day: list[24].dt_txt.replace(/-/g, "."),
        value: `${list[24].main[option]} ${setOptionMark(option)}`,
        mobile: 190,
      },
      {
        day: list[32].dt_txt.replace(/-/g, "."),
        value: `${list[32].main[option]} ${setOptionMark(option)}`,
        mobile: 130,
      },
    ];
  }

  if (period === "3 hours") {
    const chartData: {
      day: string;
      value: string;
    }[] = [];

    list.forEach((item) => {
      const dataItem = {
        day: item.dt_txt.replace(/-/g, "."),
        value: `${item.main[option]} ${setOptionMark(option)}`,
      };
      chartData.push(dataItem);
    });

    return chartData;
  }
};
