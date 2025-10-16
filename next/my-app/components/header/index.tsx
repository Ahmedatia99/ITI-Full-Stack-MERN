import Navbar from "./Navbar";
import Link from "../links";
import { Routes } from "@/constants/enums";
import Image from "next/image";

function index() {
  return (
    <header className="container">
      <div className=" lg:flex lg:justify-between border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm py-4 md:py-8 overflow-hidden">
        <Link href={Routes.ROOT}>
          <Image
            src="/assets/images/Logo.png"
            alt="FoodZero"
            priority={false}
            width={150} // Optional base width
            height={50} // Optional base height
            className="aspect-auto"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default index;
