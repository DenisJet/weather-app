import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";

export const getCityData = async (
  city: string,
  setWeatherData: (data: WeatherResponse | null) => void,
) => {
  try {
    const geoResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=3076f9ecff1701796103bce3ae8ce27c`,
    );

    if (geoResponse.data[0]) {
      const { lat, lon } = geoResponse.data[0];

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3076f9ecff1701796103bce3ae8ce27c&units=metric`,
      );

      setWeatherData(weatherResponse.data);
      toast.success("Success to get data!");
    } else {
      toast.error("No city found!");
      setWeatherData(null);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("getCity ERROR:", error.message);
      toast.error("Error to get data!");
    }
  }
};
