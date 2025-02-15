"use server";

import { cookies } from "next/headers";

const backendUrl = process.env.NEXT_PUBLIC_BASE_API;
console.log(backendUrl);

export const createShop = async (data: FormData) => {
  try {
    const res = await fetch(`${backendUrl}/shop`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    const result = await res.json();
    console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
