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
  value_1: WeatherResponse;
  value_2: WeatherResponse | null;
  selectedOption: SelectedOptions;
  selectedPeriod: SelectedPeriod;
};

export default function ChartComponent({
  value_1,
  value_2,
  selectedOption,
  selectedPeriod,
}: ChartProps) {
  const { city: city_1, list: list_1 } = value_1;
  const city_2 = value_2 ? value_2.city : null;
  const list_2 = value_2 ? value_2.list : null;

  const chartConfig = {
    value_1: {
      label: `${city_1.name}  ${setOptionMark(selectedOption)}`,
      color: "var(--chart-1)",
    },
    value_2: {
      label: `${city_2?.name}  ${setOptionMark(selectedOption)}`,
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  return (
    <Card className="max-w-[900px] w-full m-auto mt-4">
      <CardHeader>
        <CardTitle className="flex flex-wrap gap-1 justify-between">
          <div>
            5 day{" "}
            <span className="underline  decoration-solid">
              {selectedOption}
            </span>{" "}
            chart forecast for{" "}
            <span className="underline  decoration-solid">{city_1.name}</span>
          </div>
          {city_2 && (
            <span className="underline  decoration-solid">
              compare with {city_2.name}
            </span>
          )}
          <span>Interval {selectedPeriod}</span>
        </CardTitle>
        <CardDescription>
          {list_1[0].dt_txt.slice(0, 10).replace(/-/g, ".")} -{" "}
          {list_1[32].dt_txt.slice(0, 10).replace(/-/g, ".")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={setChartData(
              list_1,
              selectedOption,
              selectedPeriod,
              list_2 || [],
            )}
            margin={{
              left: 20,
              right: 20,
            }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5, 10)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              dataKey="value_1"
              type="monotone"
              stroke="var(--color-value_1)"
              strokeWidth={2}
            />
            {value_2 && (
              <Line
                dataKey="value_2"
                type="monotone"
                stroke="var(--color-value_2)"
                strokeWidth={2}
              />
            )}
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
