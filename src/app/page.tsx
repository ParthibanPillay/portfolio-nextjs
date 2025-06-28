import Navbar from "@/components/Navbar";
import PortfolioContent from "@/components/PortfolioContent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <PortfolioContent />
      </div>
    </>
  );
}
