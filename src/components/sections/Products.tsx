"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Wrapper from "../shared/Wrapper";
import Pcard from "../shared/Pcard";

const Products = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center p-x-20 ">
        <p className="text-center">PRODUCTS</p>
        <h3 className="text-center">Check What We Have</h3>
        <div className="w-full mx-auto">
          <Swiper
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            height={1000}
          >
            {slideData.map((p, index) => (
              <SwiperSlide key={index}>
                <Pcard image={p.url} title={p.title} rate={p.rate} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;

const slideData = [
  {
    url: "/products/p1.png",
    title: "Brused Raglan Sweatshirt",
    rate: "$195",
  },
  {
    url: "/products/p2.png",
    title: "Cameryn Sash Tie Dress",
    rate: "$545",
  },
  {
    url: "/products/p3.png",
    title: "Flex Sweatshirt",
    rate: "$175",
  },
  {
    url: "/products/p4.png",
    title: "Flex Sweatpants",
    rate: "$175",
  },
  {
    url: "/products/p6.png",
    title: "Imperial Alpaca Hoodie",
    rate: "$525",
  },
];
