import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rugby25Content from "./Rugby25Content";

export default function Rugby25() {
  return (
    <main className="relative h-full bg-white">
      <div className='mx-8 lg:mx-24 grid gap-20 lg:gap-4'>
        <Navbar/>
        <Rugby25Content/>
        <Footer/>
      </div>
    </main>
  );
}