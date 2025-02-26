import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";

export const getCityData = async (
  city: string,
  setData_1: (data: WeatherResponse | null) => void,
  setData_2?: (data: WeatherResponse | null) => void,
) => {
  try {
    const geoResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    );

    if (geoResponse.data[0]) {
      const { lat, lon } = geoResponse.data[0];

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`,
      );

      setData_1(weatherResponse.data);
      if (setData_2) setData_2(null);
      toast.success("Success to get data!");
    } else {
      toast.error("No city found!");
      setData_1(null);
      if (setData_2) setData_2(null);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("getCity ERROR:", error.message);
      toast.error("Error to get data!");
      setData_1(null);
      if (setData_2) setData_2(null);
    }
  }
};
