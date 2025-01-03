import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkContent from "./WorkContent";

export default function Work() {
  return (
    <main className="bg-white h-full lg:h-screen lg:overflow-hidden">
      <div className='mx-8 lg:mx-24 grid gap-20 lg:gap-0 h-full content-between'>
        <Navbar/>
        <WorkContent/>
        <Footer/>
      </div>
    </main>
  );
}