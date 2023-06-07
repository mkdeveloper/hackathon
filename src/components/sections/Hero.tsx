import { ShoppingCartIcon } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper>
      <div className="flex justify-between items-center w-full gap-y-10 gap-x-20">
        <div className="space-y-10 lg:w-[50%] w-full">
          <span className="px-8 py-2 rounded-md bg-[#e1edff] text-blue-600 font-bold">
            Sale 70%
          </span>
          <h1>An Industrial Take on Streetwear</h1>
          <p>
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className="bg-[#212121] rounded-none py-6 px-10">
            <ShoppingCartIcon className="mr-2 " />
            Start Shopping
          </Button>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-5">
            <div>
              <Image
                src="/hero/Featured1.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/hero/Featured2.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/hero/Featured3.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/hero/Featured4.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="lg:block hidden w-[50%]">
          <div className="relative">
            <div className=" absolute w-[550px] h-[550px] bg-[#ffece3] -z-[10] rounded-full top-5"></div>
            <Image
              src="/hero/header.webp"
              alt="header"
              width={600}
              height={600}
              className=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
