import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="object-cover h-[300px]"
        alt=""
        src="/hero-image.jpeg"
        width={1920}
        height={300}
      />
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
    </div>
  );
}
