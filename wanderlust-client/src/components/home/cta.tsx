import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative flex h-[380px] flex-col items-center justify-center overflow-hidden px-4 text-center text-white md:h-[440px]">
      <Image
        src="/images/CTA.png"
        alt="Aerial view of a tropical coastline"
        fill
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <h2 className="text-3xl font-medium sm:text-5xl">
        Ready To Start Your Journey?
      </h2>
      <p className="mt-3 text-sm text-white/85">
        Join thousands of travelers who have discovered the world with us.
      </p>
      <Button className="mt-8 h-10 rounded-none bg-white px-6 text-xs font-semibold tracking-wide uppercase hover:bg-white/85">
        Book Your Trip Today
        <ArrowRight data-icon="inline-end" />
      </Button>
    </section>
  );
}
