import Hero from "@/components/Hero";
import Partner from "@/components/Partner";

;

export default function Home() {
  return (
    <section className="h-full min-w-screen py-2">
      <div className="container w-full  h-auto">
        <Hero />
        <Partner/>
      </div>
    </section>
   
  );
}