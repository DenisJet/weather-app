"use client";

import ChartComponent from "@/components/ChartComponent/ChartComponent";
import Search from "@/components/Search/Search";
import Image from "next/image";
import { useState } from "react";
import { WeatherResponse } from "./interfaces/weatherResponse.interface";
import TempList from "../components/TempList/TempList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SelectedOptions = "temp" | "humidity" | "pressure";
export type SelectedPeriod = "day" | "3 hours";

export default function Home() {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [selectedOption, setSelectedOption] = useState<SelectedOptions>("temp");
  const [selectedPeriod, setSelectedPeriod] = useState<SelectedPeriod>("day");

  console.log("weatherData", data);

  return (
    <div>
      <Image
        className="object-cover h-[300px]"
        alt=""
        src="/hero-image.jpeg"
        width={1920}
        height={300}
      />
      <Search setWeatherData={setData} />
      <div className="bg-neutral-100 py-3">
        <div className="flex w-full justify-center items-center space-x-1 p-2">
          <Select
            disabled={data === null}
            value={selectedOption}
            onValueChange={(value) => {
              setSelectedOption(value as SelectedOptions);
            }}
          >
            <SelectTrigger className="w-[180px] bg-neutral-50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem defaultChecked value="temp">
                Temp
              </SelectItem>
              <SelectItem value="humidity">Humidity</SelectItem>
              <SelectItem value="pressure">Pressure</SelectItem>
            </SelectContent>
          </Select>
          <Select
            disabled={data === null}
            value={selectedPeriod}
            onValueChange={(value) => {
              setSelectedPeriod(value as SelectedPeriod);
            }}
          >
            <SelectTrigger className="w-[180px] bg-neutral-50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem defaultChecked value="day">
                Per day
              </SelectItem>
              <SelectItem value="3 hours">Per 3 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {data && (
        <div className="flex flex-wrap gap-2 max-w-7xl mx-auto p-2">
          <TempList
            weatherResponse={data}
            selectedOption={selectedOption}
            selectedPeriod={selectedPeriod}
          />
          <ChartComponent
            weatherResponse={data}
            selectedOption={selectedOption}
            selectedPeriod={selectedPeriod}
          />
        </div>
      )}
    </div>
  );
}
