"use server";

import { cookies } from "next/headers";

const backendUrl = process.env.NEXT_PUBLIC_BASE_API;
console.log(backendUrl);

export const creteCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${backendUrl}/category`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
