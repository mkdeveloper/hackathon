import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/shared/Wrapper";

export default function Cart() {
  return (
    <Wrapper>
      <div className="grid lg:grid-cols-[3fr,1fr] justify-center">
        <div className="flex justify-center gap-4">
          <div className="">
            <Image
              src={"/products/p1.png"}
              alt={"/"}
              width={100}
              height={200}
            />
          </div>
          <div className="">
            <Image
              src={"/products/p1.png"}
              alt={"/"}
              width={500}
              height={1000}
            />
          </div>
        </div>
        <div className="my-10 lg:-ml-36">
          <h2 className="text-4xl mt-4 tracking-wider">
            Brushed Raglan Sweatshirt
          </h2>
          <p className="text-2xl my-3 text-[#B0B0B0]">Sweater</p>
          <p className="uppercase my-8 text-2xl">Select Size</p>
          <div className="flex justify-evenly lg:-ml-10 text-[#666666] font-bold">
            <p>XS</p>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
          <div className="flex items-center my-8 gap-10">
            <div>
              <p className="font-bold text-xl">Quantity:</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button className="bg-[#F1F1F1] text-4xl rounded-full px-4 py-1">
                {" "}
                -{" "}
              </button>
              <p>1</p>
              <button className="bg-[#F1F1F1] text-3xl rounded-full px-3 py-1 border-r-black">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="bg-black hover:bg-black text-white">
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
            <div>
              <p className="text-4xl font-bold">$195.00</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
