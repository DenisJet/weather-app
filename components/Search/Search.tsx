"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";

export default function Search({
  setWeatherData,
}: {
  setWeatherData: ({}: WeatherResponse) => void;
}) {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getCityData = async () => {
    setIsLoading(true);
    try {
      const geoResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=3076f9ecff1701796103bce3ae8ce27c`,
      );

      const { lat, lon } = geoResponse.data[0];

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3076f9ecff1701796103bce3ae8ce27c&units=metric`,
      );

      setWeatherData(weatherResponse.data);
      toast.success("Success to get data!");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("getCity ERROR:", error.message);
        toast.error("Error to get data!");
      }
    } finally {
      setCity("");
      setIsLoading(false);
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
          required
        />
        <Button
          className="cursor-pointer bg-neutral-300 text-neutral-800"
          variant="outline"
          onClick={getCityData}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Search"}
        </Button>
      </div>
    </div>
  );
}
