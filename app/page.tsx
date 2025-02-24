import Search from "@/components/Search/Search";
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
      <Search />
    </div>
  );
}
