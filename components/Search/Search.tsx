"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader } from "lucide-react";
import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";
import { getCityData } from "@/app/api/api.actions";

export default function Search({
  setWeatherData,
}: {
  setWeatherData: (data: WeatherResponse | null) => void;
}) {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    await getCityData(city, setWeatherData); // Call the function here
    setCity("");
    setIsLoading(false);
  };

  return (
    <div className="bg-neutral-100 pt-4">
      <div className="flex w-full justify-center items-center space-x-1 px-2">
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
          onClick={handleSearch}
          disabled={isLoading || !city.trim()}
        >
          {isLoading ? <Loader /> : "Search"}
        </Button>
      </div>
    </div>
  );
}
