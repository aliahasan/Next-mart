import cupImage from "@/assets/cup-with-headphone.png";
import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import Image from "next/image";
import styles from "./Hero.module.css";

const HeroSection = () => {
  return (
    <NMContainer>
      <div
        className={`${styles.banner} container mx-auto border-2 border-white rounded-3xl mt-10 p-6 lg:p-10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
              Don&apos;t Miss Out on <br className="hidden md:block" /> These
              Unbeatable Black <br className="hidden md:block" /> Friday Deals!
            </h1>
            <p className="my-4 text-sm md:text-base lg:text-lg">
              Save big this Black Friday with unbeatable deals on tech, home
              essentials, fashion, and more! Limited stock.
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Button className="rounded-full px-6 py-3 text-sm md:text-base">
                Buy Now
              </Button>
              <Button
                className="rounded-full px-6 py-3 text-sm md:text-base"
                variant="outline"
              >
                All Products
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={cupImage}
              alt="cup image"
              className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96"
            />
          </div>
        </div>
      </div>
    </NMContainer>
  );
};

export default HeroSection;
