import Image from "next/image";
import Card from "../shared/Icard";
import Wrapper from "../shared/Wrapper";
import { Button } from "../ui/button";

const Unique = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-between items-center px-10">
        <div className="lg:self-end lg:w-[40%]  w-full">
          <h2 className="leading-tight">
            Unique and Authentic Vintage Designer Jewellery
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-x-20 mt-5">
          <div className="grid grid-cols-2 w-full gap-y-5 mt-5 max-w-[500px] relative">
            <div>
              <Card
                title="Using Good Quality Materials"
                para="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
              />
            </div>
            <div>
              <Card
                title="100% Handmade Products"
                para="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
              />
            </div>
            <div>
              <Card
                title="Modern Fashion Design"
                para="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
              />
            </div>
            <div>
              <Card
                title="Discount for Bulk Orders"
                para="Lorem ipsum dolor sit amt, consectetur adipiscing elit."
              />
            </div>
            <div className="absolute capitalize text-[80px] font-extrabold -z-10 -top-8 text-[#212121]/5">
              different from others
            </div>
          </div>

          <div className="flex items-center justify-center flex-col sm:flex-row w-full gap-10">
            <div className="w-[50%]">
              <Image
                src="/products/feature.webp"
                alt=""
                width={250}
                height={250}
              />
            </div>
            <div className="w-[50%]">
              <p>
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Button className="mt-5 rounded-none bg-[#212121]">
                See All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Unique;
