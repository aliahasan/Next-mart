"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
type DiscountType = "Percentage" | "Flat";

export type Coupon = {
  code: string;
  discountType: DiscountType;
  discountValue: number;
  minOrderAmount: number;
  maxDiscountAmount: number;
  startDate: string;
  endDate: string;
};

const backendUrl = process.env.NEXT_PUBLIC_BASE_API;
export const createCoupon = async (data: Coupon) => {
  try {
    const res = await fetch(`${backendUrl}/coupon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(data),
    });
    revalidateTag("COUPON");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
