import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Search from "../Search/Search";
import { WeatherResponse } from "@/app/interfaces/weatherResponse.interface";

type CompareModalProps = {
  isDisabled: boolean;
  setData2: (data: WeatherResponse | null) => void;
};

export default function CompareModal({
  isDisabled,
  setData2,
}: CompareModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="cursor-pointer bg-neutral-300 text-neutral-800"
          variant="outline"
          disabled={isDisabled}
        >
          Compare
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-100">
        <DialogHeader>
          <DialogTitle>Enter the city name to compare</DialogTitle>
          <DialogDescription asChild>
            <Search setData_1={setData2} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
