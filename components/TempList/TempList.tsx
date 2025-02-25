import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { SelectedOptions } from "@/app/page";

type TempListProps = {
  weatherResponse: WeatherResponse;
  selectedOption: SelectedOptions;
};

export default function TempList({
  weatherResponse,
  selectedOption,
}: TempListProps) {
  const { city, list } = weatherResponse;
  const optionMark =
    selectedOption === "temp"
      ? "℃"
      : selectedOption === "humidity"
      ? "%"
      : "hPa";

  return (
    <Card className="max-w-[500px] w-full m-auto mt-4">
      <CardHeader>
        <CardTitle>
          5 day{" "}
          <span className="underline  decoration-solid">{selectedOption}</span>{" "}
          forecast for {city.name}
        </CardTitle>
        <CardDescription>
          {list[0].dt_txt.slice(0, 10).replace(/-/g, ".")} -{" "}
          {list[32].dt_txt.slice(0, 10).replace(/-/g, ".")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {list.map((item, index) => {
          if (
            index === 0 ||
            index === 8 ||
            index === 16 ||
            index === 24 ||
            index === 32
          ) {
            return (
              <div key={item.dt} className="flex gap-2 justify-between">
                <span>{item.dt_txt.slice(0, 10).replace(/-/g, ".")}</span>
                <span>
                  {item.main[selectedOption]} {optionMark}
                </span>
              </div>
            );
          }
        })}
      </CardContent>
    </Card>
  );
}
