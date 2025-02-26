import { WeatherData } from "../interfaces/weatherData.interface";
import { SelectedOptions, SelectedPeriod } from "../page";

export const setChartData = (
  list_1: WeatherData[],
  option: SelectedOptions,
  period: SelectedPeriod,
  list_2?: WeatherData[],
) => {
  const formatData = (item: WeatherData, index?: number) => ({
    time: item.dt_txt.replace(/-/g, "."),
    value_1: item.main[option],
    value_2: list_2 && index !== undefined ? list_2[index]?.main[option] : null,
  });

  if (period === "1 day") {
    const indices = [0, 8, 16, 24, 32];
    return indices.map((index) => formatData(list_1[index], index));
  }

  if (period === "3 hours") {
    return list_1.map((item, index) => formatData(item, index));
  }
};
