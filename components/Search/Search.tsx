"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios, { AxiosError } from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getCityData = async () => {
    try {
      const geoResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=3076f9ecff1701796103bce3ae8ce27c`,
      );

      const { lat, lon } = geoResponse.data[0];

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3076f9ecff1701796103bce3ae8ce27c&units=metric`,
      );

      setWeatherData(weatherResponse.data);
      console.log("Weather DATA:", weatherData);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("getCity ERROR:", error.message);
        // toast({ title: `Ошибка! ${error.response?.data.detail}` });
      }
    } finally {
      setCity("");
    }
  };

  return (
    <div className="bg-neutral-100 py-3">
      <div className="flex w-full justify-center items-center space-x-1 p-2">
        <Input
          className="max-w-sm bg-neutral-50"
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          className="cursor-pointer bg-neutral-300 text-neutral-800"
          variant="outline"
          onClick={getCityData}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
