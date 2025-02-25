"use client";

import ChartComponent from "@/components/ChartComponent/ChartComponent";
import Search from "@/components/Search/Search";
import Image from "next/image";
import { useState } from "react";
import { WeatherResponse } from "./interfaces/weatherResponse.interface";
import TempList from "../components/TempList/TempList";
import SelectOptions from "@/components/SelectOptions/SelectOptions";

export type SelectedOptions = "temp" | "humidity" | "pressure";
export type SelectedPeriod = "day" | "3 hours";

export default function Home() {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [selectedOption, setSelectedOption] = useState<SelectedOptions>("temp");
  const [selectedPeriod, setSelectedPeriod] = useState<SelectedPeriod>("day");

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
      <SelectOptions
        isDisabled={data === null}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
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
