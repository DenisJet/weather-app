import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { SelectedOptions, SelectedPeriod } from "@/app/page";
import { setChartData } from "@/app/helpers/setChartData";

type TempListProps = {
  weatherResponse: WeatherResponse;
  selectedOption: SelectedOptions;
  selectedPeriod: SelectedPeriod;
};

export default function TempList({
  weatherResponse,
  selectedOption,
  selectedPeriod,
}: TempListProps) {
  const { city, list } = weatherResponse;

  const data = setChartData(list, selectedOption, selectedPeriod);

  return (
    <Card className="max-w-[500px] w-full m-auto mt-4">
      <CardHeader>
        <CardTitle>
          5 day{" "}
          <span className="underline  decoration-solid">{selectedOption}</span>{" "}
          forecast for{" "}
          <span className="underline  decoration-solid">{city.name}</span>
        </CardTitle>
        <CardDescription>
          {list[0].dt_txt.slice(0, 10).replace(/-/g, ".")} -{" "}
          {list[32].dt_txt.slice(0, 10).replace(/-/g, ".")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data &&
          data.map((item) => {
            return (
              <div key={item.day} className="flex gap-2 justify-between">
                <span>{item.day}</span>
                <span>{item.value}</span>
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
}
