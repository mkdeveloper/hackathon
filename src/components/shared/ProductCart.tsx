"use client";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";

interface ICartProps {
  prodId: string;
}

const ProductCart: FC<ICartProps> = ({ prodId }) => {
  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: prodId,
        quantity: quantity,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="flex items-center justify-center gap-x-2">
        Quantity:
        <span
          className="w-8 h-8 rounded-full border border-black flex justify-center items-center"
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </span>
        {quantity}
        <span
          className="w-8 h-8 rounded-full border border-black flex justify-center items-center "
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </span>
      </p>
      <Button onClick={handleAddToCart}>
        <ShoppingCartIcon className="mr-1" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCart;
