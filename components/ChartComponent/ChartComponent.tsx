"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { WeatherData } from "@/app/interfaces/weatherData.interface";
import { CityData } from "@/app/interfaces/cityData.interface";

type ChartComponentProps = {
  city: CityData;
  data: WeatherData[];
};

const chartConfig = {
  temp: {
    label: "Temp ℃",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function ChartComponent({ city, data }: ChartComponentProps) {
  const chartData = [
    {
      day: data[0].dt_txt.replace(/-/g, "."),
      temp: data[0].main.temp,
      mobile: 80,
    },
    {
      day: data[8].dt_txt.replace(/-/g, "."),
      temp: data[8].main.temp,
      mobile: 200,
    },
    {
      day: data[16].dt_txt.replace(/-/g, "."),
      temp: data[16].main.temp,
      mobile: 120,
    },
    {
      day: data[24].dt_txt.replace(/-/g, "."),
      temp: data[24].main.temp,
      mobile: 190,
    },
    {
      day: data[32].dt_txt.replace(/-/g, "."),
      temp: data[32].main.temp,
      mobile: 130,
    },
  ];

  return (
    <Card className="max-w-[500px] m-auto mt-4">
      <CardHeader>
        <CardTitle>5 day forecast for {city.name}</CardTitle>
        <CardDescription>
          {data[0].dt_txt.slice(0, 10).replace(/-/g, ".")} -{" "}
          {data[32].dt_txt.slice(0, 10).replace(/-/g, ".")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 16,
              right: 16,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5, 10)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="temp"
              type="monotone"
              stroke="var(--color-temp)"
              strokeWidth={2}
              dot={false}
            />
            {/* <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            /> */}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
