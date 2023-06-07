import { ShoppingCartIcon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";

const getCartData = async () => {
  // const res = await fetch("http://localhost:3000/api/cart", {
  //   method: "GET",
  // });
  // const cartData = await res.json();
  // return hasCookie;
};

const Cart = async () => {
  return (
    <>
      <Link href={"/cart"}>
        <div className="w-12 h-12 rounded-full bg-[#f1f1f1] flex justify-center items-center relative">
          <ShoppingCartIcon />
          <span className="absolute bottom-8 left-7 w-5 h-5 bg-[#f02d34] text-white text-xs rounded-full flex justify-center items-center"></span>
        </div>
      </Link>
    </>
  );
};

export default Cart;
