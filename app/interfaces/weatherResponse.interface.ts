import { CityData } from "./cityData.interface";
import { WeatherData } from "./weatherData.interface";

export interface WeatherResponse {
  list: WeatherData[];
  city: CityData;
}
