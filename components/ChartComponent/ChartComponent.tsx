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
import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";
import { SelectedOptions } from "@/app/page";

type ChartProps = {
  weatherResponse: WeatherResponse;
  selectedOption: SelectedOptions;
};

const chartConfig = {
  value: {
    label: "Temp ℃",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function ChartComponent({
  weatherResponse,
  selectedOption,
}: ChartProps) {
  const { city, list } = weatherResponse;

  const chartData = [
    {
      day: list[0].dt_txt.replace(/-/g, "."),
      value: list[0].main[selectedOption],
      mobile: 80,
    },
    {
      day: list[8].dt_txt.replace(/-/g, "."),
      value: list[8].main[selectedOption],
      mobile: 200,
    },
    {
      day: list[16].dt_txt.replace(/-/g, "."),
      value: list[16].main[selectedOption],
      mobile: 120,
    },
    {
      day: list[24].dt_txt.replace(/-/g, "."),
      value: list[24].main[selectedOption],
      mobile: 190,
    },
    {
      day: list[32].dt_txt.replace(/-/g, "."),
      value: list[32].main[selectedOption],
      mobile: 130,
    },
  ];

  return (
    <Card className="max-w-[500px] w-full m-auto mt-4">
      <CardHeader>
        <CardTitle>
          5 day{" "}
          <span className="underline  decoration-solid">{selectedOption}</span>{" "}
          chart forecast for {city.name}
        </CardTitle>
        <CardDescription>
          {list[0].dt_txt.slice(0, 10).replace(/-/g, ".")} -{" "}
          {list[32].dt_txt.slice(0, 10).replace(/-/g, ".")}
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
              dataKey="value"
              type="monotone"
              stroke="var(--color-value)"
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
