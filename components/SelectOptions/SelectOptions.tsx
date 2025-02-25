import { SelectedOptions, SelectedPeriod } from "@/app/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectOptionsProps = {
  isDisabled: boolean;
  selectedOption: SelectedOptions;
  setSelectedOption: (option: SelectedOptions) => void;
  selectedPeriod: SelectedPeriod;
  setSelectedPeriod: (period: SelectedPeriod) => void;
};

export default function SelectOptions({
  isDisabled,
  selectedOption,
  setSelectedOption,
  selectedPeriod,
  setSelectedPeriod,
}: SelectOptionsProps) {
  return (
    <div className="bg-neutral-100">
      <div className="flex flex-wrap gap-2 w-full justify-center items-center space-x-1 p-2">
        <Select
          disabled={isDisabled}
          value={selectedOption}
          onValueChange={(value) => {
            setSelectedOption(value as SelectedOptions);
          }}
        >
          <SelectTrigger className="w-[180px] bg-neutral-50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem defaultChecked value="temp">
              Temp
            </SelectItem>
            <SelectItem value="humidity">Humidity</SelectItem>
            <SelectItem value="pressure">Pressure</SelectItem>
          </SelectContent>
        </Select>
        <Select
          disabled={isDisabled}
          value={selectedPeriod}
          onValueChange={(value) => {
            setSelectedPeriod(value as SelectedPeriod);
          }}
        >
          <SelectTrigger className="w-[180px] bg-neutral-50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem defaultChecked value="1 day">
              Interval 1 day
            </SelectItem>
            <SelectItem value="3 hours">Interval 3 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
