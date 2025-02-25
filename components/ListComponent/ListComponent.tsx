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
import { setOptionMark } from "@/app/helpers/setOptionMark";

type ListComponentProps = {
  value_1: WeatherResponse;
  value_2: WeatherResponse | null;
  selectedOption: SelectedOptions;
  selectedPeriod: SelectedPeriod;
};

export default function ListComponent({
  value_1,
  value_2,
  selectedOption,
  selectedPeriod,
}: ListComponentProps) {
  const { city: city_1, list: list_1 } = value_1;
  const city_2 = value_2 ? value_2.city : null;
  const list_2 = value_2 ? value_2.list : null;

  const data = setChartData(
    list_1,
    selectedOption,
    selectedPeriod,
    list_2 || [],
  );

  return (
    <div className="flex flex-wrap gap-2 justify-center m-auto mt-4">
      <Card className="max-w-[500px] text-sm">
        <CardHeader>
          <CardTitle className="flex flex-wrap gap-1 justify-between">
            <div>
              5 day{" "}
              <span className="underline  decoration-solid">
                {selectedOption}
              </span>{" "}
              forecast for{" "}
              <span className="underline  decoration-solid">{city_1.name}</span>
            </div>
            <span>Interval {selectedPeriod}</span>
          </CardTitle>
          <CardDescription>
            {list_1[0].dt_txt.slice(0, 10).replace(/-/g, ".")} -{" "}
            {list_1[32].dt_txt.slice(0, 10).replace(/-/g, ".")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data &&
            data.map((item) => {
              return (
                <div key={item.time} className="flex gap-2 justify-between">
                  <span>{item.time}</span>
                  <span>
                    {item.value_1} {setOptionMark(selectedOption)}
                  </span>
                </div>
              );
            })}
        </CardContent>
      </Card>
      {value_2 && (
        <Card className="max-w-[500px] text-sm">
          <CardHeader>
            <CardTitle className="flex flex-wrap gap-1 justify-between">
              <div>
                5 day{" "}
                <span className="underline  decoration-solid">
                  {selectedOption}
                </span>{" "}
                forecast for{" "}
                <span className="underline  decoration-solid">
                  {city_2?.name}
                </span>
              </div>
              <span>Interval {selectedPeriod}</span>
            </CardTitle>
            <CardDescription>
              {list_1[0].dt_txt.slice(0, 10).replace(/-/g, ".")} -{" "}
              {list_1[32].dt_txt.slice(0, 10).replace(/-/g, ".")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data &&
              data.map((item) => {
                return (
                  <div key={item.time} className="flex gap-2 justify-between">
                    <span>{item.time}</span>
                    <span>
                      {item.value_2} {setOptionMark(selectedOption)}
                    </span>
                  </div>
                );
              })}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
