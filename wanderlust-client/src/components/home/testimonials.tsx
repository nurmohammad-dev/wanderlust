import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "“The Bali Trail Was Absolutely Magical! Every Detail Was Taken Care Of, The Resort Was Luxurious, And The Cultural Experiences Were Truly Unforgettable.”",
    name: "Michael Otieno",
    photo: "/images/person1.png",
  },
  {
    quote:
      "“Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking, And Our Guide Was Incredibly Knowledgeable. Highly Recommended!”",
    name: "Sarah Johnson",
    photo: "/images/person2.png",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium sm:text-4xl">
          What Travelers Say
        </h2>

        <Carousel className="pb-2 sm:pb-0">
          <div className="mt-2 flex items-end justify-between gap-4">
            <p className="text-xs text-foreground/60 sm:text-sm">
              Real experiences from our happy travelers
            </p>
            <div className="flex gap-2">
              <CarouselPrevious
                aria-label="Previous testimonials"
                className="static size-9 rounded-full bg-white"
              />
              <CarouselNext
                aria-label="Next testimonials"
                className="static size-9 rounded-full bg-white"
              />
            </div>
          </div>

          <CarouselContent className="mt-6">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="sm:basis-1/2"
              >
                <figure className="flex h-full min-h-[260px]">
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <blockquote className="text-sm leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-6 text-center text-sm text-[#00a1c1] underline underline-offset-4">
                      — {testimonial.name}
                    </figcaption>
                  </div>
                  <div className="relative w-[42%]">
                    <Image
                      src={testimonial.photo}
                      alt={`Photo of ${testimonial.name}`}
                      fill
                      sizes="(max-width: 640px) 42vw, 21vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
