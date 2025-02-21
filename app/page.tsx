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
      <div className="max-w-7xl mx-auto p-2">Main App</div>
    </div>
  );
}
