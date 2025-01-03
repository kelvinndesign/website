import Link from "next/link";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-white">
      <div className='mx-8 lg:mx-24 grid h-full content-between'>
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
    </main>
  );
}