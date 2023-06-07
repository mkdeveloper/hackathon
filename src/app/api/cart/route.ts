import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

interface ICart {
  product_id: string;
  quantity: number;
}

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: (error as { message: string }).message,
    });
  }
};

export const POST = async (request: NextRequest) => {
  const req: ICart = await request.json();
  const uid = uuid();
  const setCookies = cookies();

  const user_id = cookies().get("user_id");

  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    if (req) {
      const res = await db
        .insert(cartTable)
        .values({
          user_id: cookies().get("user_id")?.value as string,
          product_id: req.product_id,
          quantity: req.quantity,
        })
        .returning();
      return NextResponse.json({ res });
    } else {
      throw new Error("Failed to insert Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};
