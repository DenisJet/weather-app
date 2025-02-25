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
import { SelectedOptions, SelectedPeriod } from "@/app/page";
import { setOptionMark } from "@/app/helpers/setOptionMark";
import { setChartData } from "@/app/helpers/setChartData";

type ChartProps = {
  weatherResponse: WeatherResponse;
  selectedOption: SelectedOptions;
  selectedPeriod: SelectedPeriod;
};

export default function ChartComponent({
  weatherResponse,
  selectedOption,
  selectedPeriod,
}: ChartProps) {
  const { city, list } = weatherResponse;

  const chartConfig = {
    value: {
      label: `${selectedOption}  ${setOptionMark(selectedOption)}`,
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <Card className="max-w-[500px] w-full m-auto mt-4">
      <CardHeader>
        <CardTitle>
          5 day{" "}
          <span className="underline  decoration-solid">{selectedOption}</span>{" "}
          chart forecast for{" "}
          <span className="underline  decoration-solid">{city.name}</span>
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
            data={setChartData(list, selectedOption, selectedPeriod)}
            margin={{
              left: 20,
              right: 20,
            }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5, 10)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
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
