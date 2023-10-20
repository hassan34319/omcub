import Image from "next/image";
import menHeroImg from "../../assets/men-hero.png";
import womenHeroImg from "../../assets/women-hero.png";
import Link from "next/link";
import {
  allMensClothingCategoryId,
  allWomensClothingCategoryId,
} from "../../services/printful";

export const HeroSectionHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="h-full relative">
        <Image src={menHeroImg} alt="men hero" className="object-cover" />
        <Link
          href={`/collections/${allMensClothingCategoryId}`}
          className={`transition-all duration-500 absolute top-1/2 md:top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-roboto font-bold md:text-lg whitespace-nowrap md:border border-white rounded-[3px] px-10 py-3 bg-primary-800 md:bg-transparent md:hover:bg-white md:hover:text-primary-800`}
        >
          SHOP MEN&apos;S
        </Link>
      </div>
      <div className="h-full relative">
        <Image src={womenHeroImg} alt="men hero" className="object-cover" />
        <Link
          href={`/collections/${allWomensClothingCategoryId}`}
          className={`transition-all duration-500 absolute top-1/2 md:top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-roboto font-bold md:text-lg whitespace-nowrap md:border border-white rounded-[3px] px-10 py-3 bg-primary-800 md:bg-transparent md:hover:bg-white md:hover:text-primary-800`}
        >
          SHOP WOMEN&apos;S
        </Link>
      </div>
    </div>
  );
};
