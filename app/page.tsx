"use client";

import ChartComponent from "@/components/ChartComponent/ChartComponent";
import Search from "@/components/Search/Search";
import Image from "next/image";
import { useState } from "react";
import { WeatherResponse } from "./interfaces/weatherResponse.interface";
import ListComponent from "../components/ListComponent/ListComponent";
import SelectOptions from "@/components/SelectOptions/SelectOptions";

export type SelectedOptions = "temp" | "humidity" | "pressure";
export type SelectedPeriod = "1 day" | "3 hours";

export default function Home() {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [selectedOption, setSelectedOption] = useState<SelectedOptions>("temp");
  const [selectedPeriod, setSelectedPeriod] = useState<SelectedPeriod>("1 day");

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
        <div className="flex flex-col gap-2 max-w-7xl mx-auto p-2">
          <ChartComponent
            weatherResponse={data}
            selectedOption={selectedOption}
            selectedPeriod={selectedPeriod}
          />
          <ListComponent
            weatherResponse={data}
            selectedOption={selectedOption}
            selectedPeriod={selectedPeriod}
          />
        </div>
      )}
    </div>
  );
}
