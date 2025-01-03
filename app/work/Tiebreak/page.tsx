import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiebreakContent from "./TiebreakContent";

export default function Tiebreak() {
  return (
    <main className="relative h-full bg-white">
      <div className='mx-8 lg:mx-24 grid gap-20 lg:gap-4'>
        <Navbar/>
        <TiebreakContent/>
        <Footer/>
      </div>
    </main>
  );
}