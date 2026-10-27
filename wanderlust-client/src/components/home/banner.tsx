import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchFields = [
  { label: "Location", placeholder: "Address, City Or Zip" },
  { label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { label: "Budget", placeholder: "$0 - $300.00" },
  { label: "People", placeholder: "3 - 10" },
];

export function Banner() {
  return (
    <section className="relative flex min-h-[600px] flex-col lg:min-h-[calc(100svh-64px)]">
      <Image
        src="/images/Banner.png"
        alt="Coastal destination with turquoise water and hillside villages"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center text-white">
        <h1 className="text-4xl leading-tight font-normal sm:text-6xl md:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-4 max-w-xl text-sm text-white/85 sm:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="h-11 rounded-none bg-[#00a1c1] px-6 text-xs font-semibold tracking-wide text-white uppercase hover:bg-[#0389a3]">
            Explore Now
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button className="h-11 rounded-none bg-white/30 px-6 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm hover:bg-white/40">
            View Destination
          </Button>
        </div>
      </div>

      <div className="relative grid grid-cols-2 border-t border-white/20 bg-black/25 text-white backdrop-blur-[2px] lg:grid-cols-5">
        {searchFields.map((field) => (
          <div
            key={field.label}
            className="border-white/20 px-6 py-4 max-lg:border-b max-lg:odd:border-r lg:[&:not(:first-child)]:border-l"
          >
            <div className="text-sm font-semibold">{field.label}</div>
            <div className="mt-1 text-xs text-white/70">
              {field.placeholder}
            </div>
          </div>
        ))}
        <Button className="col-span-2 h-16 rounded-none bg-[#00a1c1] text-sm font-semibold text-white hover:bg-[#0389a3] lg:col-span-1 lg:h-full lg:border-l lg:border-white/20">
          Search
        </Button>
      </div>
    </section>
  );
}
