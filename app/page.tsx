import Explore from "@/components/Explore";
import Faqs from "@/components/Faqs";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Technology from "@/components/Technology";

;

export default function Home() {
  return (
    <div className="min-w-screen bg-back-1">
      <div className="container w-full  h-auto">
        <Hero />
        <div className="mt-12 mb-10n">
        <Partner/>
        </div>
        <div className="">
          <Technology/>
        </div>
        <div className="mt-6">
          <Feature/>
        </div>
        <div>
          <Explore/>
        </div>
        <div className="mt-6">
          <Faqs/>
        </div>
      </div>
    </div>
   
  );
}
