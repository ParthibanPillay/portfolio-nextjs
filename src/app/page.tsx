import Navbar from "@/components/Navbar";
import PortfolioContent from "@/components/PortfolioContent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen min-w-screen">
        <Navbar />
        <PortfolioContent />
      </div>
    </>
  );
}
