"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const backendUrl = process.env.NEXT_PUBLIC_BASE_API;
console.log(backendUrl);

//create category
export const creteCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${backendUrl}/category`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("CATEGORY");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

//get all category
export const getAllCategories = async () => {
  try {
    const res = await fetch(`${backendUrl}/category`, {
      next: {
        tags: ["CATEGORY"],
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

//delete category
export const deleteCategory = async (categoryId: string): Promise<any> => {
  try {
    const res = await fetch(`${backendUrl}/category/${categoryId}`, {
      method: "DELETE",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("CATEGORY");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
