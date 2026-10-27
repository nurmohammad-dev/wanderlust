import { Banner } from "@/components/home/banner";
import { CtaSection } from "@/components/home/cta";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
    
      <div className="px-3 lg:px-6">
        <Banner />
      </div>
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
