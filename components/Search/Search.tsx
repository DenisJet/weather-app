import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Search() {
  return (
    <div className="bg-neutral-100 py-3">
      <div className="flex w-full justify-center items-center space-x-1 p-2">
        <Input
          className="max-w-sm bg-neutral-50"
          type="text"
          placeholder="Search city"
        />
        <Button
          className="cursor-pointer bg-neutral-300 text-neutral-800"
          variant="outline"
          type="submit"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
