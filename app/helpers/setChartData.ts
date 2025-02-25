import { WeatherData } from "../interfaces/weatherData.interface";
import { SelectedOptions, SelectedPeriod } from "../page";

export const setChartData = (
  list_1: WeatherData[],
  option: SelectedOptions,
  period: SelectedPeriod,
  list_2?: WeatherData[],
) => {
  if (period === "1 day") {
    return [
      {
        time: list_1[0].dt_txt.replace(/-/g, "."),
        value_1: list_1[0].main[option],
        value_2: list_2 ? list_2[0]?.main[option] : null,
      },
      {
        time: list_1[8].dt_txt.replace(/-/g, "."),
        value_1: list_1[8].main[option],
        value_2: list_2 ? list_2[8]?.main[option] : null,
      },
      {
        time: list_1[16].dt_txt.replace(/-/g, "."),
        value_1: list_1[16].main[option],
        value_2: list_2 ? list_2[16]?.main[option] : null,
      },
      {
        time: list_1[24].dt_txt.replace(/-/g, "."),
        value_1: list_1[24].main[option],
        value_2: list_2 ? list_2[24]?.main[option] : null,
      },
      {
        time: list_1[32].dt_txt.replace(/-/g, "."),
        value_1: list_1[32].main[option],
        value_2: list_2 ? list_2[32]?.main[option] : null,
      },
    ];
  }

  if (period === "3 hours") {
    const chartData: {
      time: string;
      value_1: number;
      value_2?: number;
    }[] = [];

    list_1.forEach((item) => {
      const dataItem = {
        time: item.dt_txt.replace(/-/g, "."),
        value_1: item.main[option],
      };
      chartData.push(dataItem);
    });

    if (list_2 && list_2.length) {
      list_2.forEach((item, index) => {
        chartData[index].value_2 = item.main[option];
      });
    }

    return chartData;
  }
};
