import React from "react";
import { ArrowRightCircle } from "lucide-react";
import Link from "@/components/links";
import { Routes } from "@/constants/enums";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="py-20 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <h1 className="text-4xl font-bold uppercase">Slice into Happiness</h1>
        <p className="text-gray-600 text-base my-10">
          Craving pizza? We &aspo sve got you covered with fresh ingredients,
          endless flavors, and the fastest delivery. Your perfect slice is just
          a tap oway!
        </p>
        <div className="flex items-center gap-3 ">
          <Link
            href={`/${Routes.MENU}`}
            className={`${buttonVariants({
              size: "lg",
            })} space-x-2 !px-6 !font-bold !tracking-widest !rounded-full uppercase`}
          >
            order now
            <ArrowRightCircle className={`!w-5 !h-5`} />
          </Link>

          <Link
            href={`/${Routes.ABOUT}`}
            className="flex gap-2 items-center text-black  duration-200 transition-all font-bold border !rounded-full hover:border-primary px-4 py-2 tracking-widest uppercase"
          >
            learn more
            <ArrowRightCircle className={`!w-5 !h-5`} />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="relative hidden md:block">
        <Image
          src="/assets/images/hero-pizza.png"
          alt="Pizza"
          fill
          className="object-contain"
          loading="eager"
          priority
        />
      </div>
    </main>
  );
};

export default Hero;
