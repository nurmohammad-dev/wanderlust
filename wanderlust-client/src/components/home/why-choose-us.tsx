import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#e6f2f8] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl bg-white p-4 sm:p-6">
        <div className="px-6 py-10 sm:px-12 sm:py-14">
          <h2 className="text-center text-3xl font-medium sm:text-4xl">
            Why Choose Wanderlast
          </h2>
          <p className="mt-3 text-center text-xs text-foreground/60 sm:text-sm">
            Your trusted partner for exceptional travel experiences
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <Image
                  src={feature.icon}
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden
                />
                <h3 className="mt-4 text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
