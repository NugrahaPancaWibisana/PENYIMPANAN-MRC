"use server";

import { cookies } from "next/headers";
import Database from "./db";
import { v4 as uuid } from "uuid";
import { redirect } from "next/navigation";
import { Barang } from "@/components/Columns";

export async function handleLogin(formData: FormData) {
  const tokenSession = uuid();

  const user = await Database.user.update({
    where: {
      RFID: formData.get("RFID") as string,
    },
    data: {
      token: tokenSession,
    },
  });

  cookies().set("name", user.name!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  cookies().set("token", user.token!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  if (user.role === "admin") {
    cookies().set("admin", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }

  if (user.role === "admin") {
    redirect("/admin/dashboard");
  } else {
    redirect("/user");
  }
}

export async function getBarang(): Promise<Barang[]> {
  const barang = await Database.barang.findMany();
  return barang;
}

export async function updateStokBarang(formData: FormData) {
  try {
    await Database.barang.update({
      where: {
        id: Number(formData.get("id")),
      },
      data: {
        stokBarang: Number(formData.get("stokBarang")),
      },
    });
  } catch (error) {
    console.error(`Gagal mengupdate stok barang ${error}`);
  }
}

export async function deleteBarang(id: number) {
  try {
    await Database.barang.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(`Gagal menghapus barang dengan ID ${id} ${error}`);
  }
}

export async function handleLogout() {
  cookies().delete("token");
  await Database.user.update({
    where: {
      name: cookies().get("name")?.value,
    },
    data: {
      token: null,
    },
  });

  cookies().delete("name");
  cookies().delete("token");

  if (cookies().get("admin")) {
    cookies().delete("admin");
  }

  redirect("/");
}
