"use client";

import ChartComponent from "@/components/ChartComponent/ChartComponent";
import Search from "@/components/Search/Search";
import Image from "next/image";
import { useState } from "react";
import { WeatherResponse } from "./interfaces/weatherResponse.interface";
import TempList from "../components/TempList/TempList";

export default function Home() {
  const [data, setData] = useState<WeatherResponse | null>(null);

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
      {data && (
        <div className="flex flex-wrap gap-2 max-w-7xl mx-auto p-2">
          <TempList list={data.list} city={data.city} />
          <ChartComponent list={data.list} city={data.city} />
        </div>
      )}
    </div>
  );
}
