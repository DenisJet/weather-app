import { WeatherData } from "../interfaces/weatherData.interface";
import { SelectedOptions, SelectedPeriod } from "../page";

export const setChartData = (
  list: WeatherData[],
  option: SelectedOptions,
  period: SelectedPeriod,
) => {
  if (period === "day") {
    return [
      {
        time: list[0].dt_txt.replace(/-/g, "."),
        value: list[0].main[option],
        mobile: 80,
      },
      {
        time: list[8].dt_txt.replace(/-/g, "."),
        value: list[8].main[option],
        mobile: 200,
      },
      {
        time: list[16].dt_txt.replace(/-/g, "."),
        value: list[16].main[option],
        mobile: 120,
      },
      {
        time: list[24].dt_txt.replace(/-/g, "."),
        value: list[24].main[option],
        mobile: 190,
      },
      {
        time: list[32].dt_txt.replace(/-/g, "."),
        value: list[32].main[option],
        mobile: 130,
      },
    ];
  }

  if (period === "3 hours") {
    const chartData: {
      time: string;
      value: number;
    }[] = [];

    list.forEach((item) => {
      const dataItem = {
        time: item.dt_txt.replace(/-/g, "."),
        value: item.main[option],
      };
      chartData.push(dataItem);
    });

    return chartData;
  }
};
