import Image from "next/image";
import React, { FC } from "react";

type IpCard = {
  image: string;
  title: string;
  rate: string;
};

const Pcard: FC<IpCard> = ({ image, title, rate }) => {
  return (
    <div className="flex flex-col justify-center p-20 items-center ">
      <div className="flex flex-col justify-center items-start h-[400px] w-96 hover:scale-110 ease-in duration-300 gap-3">
        <Image src={image} alt="" width={360} height={360} />
        <p className="text-base font-bold self-start">{title}</p>
        <p className="text-base font-bold self-start">{rate}</p>
      </div>
    </div>
  );
};

export default Pcard;
