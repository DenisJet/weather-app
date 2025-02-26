"use client";

import ChartComponent from "@/components/ChartComponent/ChartComponent";
import Search from "@/components/Search/Search";
import Image from "next/image";
import { useState } from "react";
import { WeatherResponse } from "./interfaces/weatherResponse.interface";
import ListComponent from "../components/ListComponent/ListComponent";
import SelectOptions from "@/components/SelectOptions/SelectOptions";
import CompareModal from "@/components/CompareModal/CompareModal";

export type SelectedOptions = "temp" | "humidity" | "pressure";
export type SelectedPeriod = "1 day" | "3 hours";

export default function Home() {
  const [data_1, setData_1] = useState<WeatherResponse | null>(null);
  const [data_2, setData_2] = useState<WeatherResponse | null>(null);
  const [selectedOption, setSelectedOption] = useState<SelectedOptions>("temp");
  const [selectedPeriod, setSelectedPeriod] = useState<SelectedPeriod>("1 day");

  return (
    <div>
      <div className="relative">
        <h1 className="absolute text-neutral-50 p-4 top-10 left-0 font-semibold text-3xl sm:text-5xl md:left-20">
          An easy way <br /> to find out the weather forecast
        </h1>
        <Image
          className="object-cover h-[300px]"
          alt=""
          src="/hero-image.jpeg"
          width={1920}
          height={300}
        />
      </div>
      <Search setData_1={setData_1} setData_2={setData_2} />
      <div className="flex flex-wrap w-full justify-center items-center bg-neutral-100 py-3">
        <SelectOptions
          isDisabled={data_1 === null}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
        />
        <CompareModal isDisabled={data_1 === null} setData2={setData_2} />
      </div>
      {data_1 && (
        <>
          <div className="flex flex-col gap-2 max-w-7xl mx-auto p-2 pb-6">
            <ChartComponent
              value_1={data_1}
              value_2={data_2 ? data_2 : null}
              selectedOption={selectedOption}
              selectedPeriod={selectedPeriod}
            />
            <ListComponent
              value_1={data_1}
              value_2={data_2 ? data_2 : null}
              selectedOption={selectedOption}
              selectedPeriod={selectedPeriod}
            />
          </div>
          <footer className="bg-neutral-800 text-neutral-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto p-2 py-4">
              <p className="font-semibold text-lg">Weather App</p>
              <p>Thanks for use!</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
