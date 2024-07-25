"use server";

import { cookies } from "next/headers";
import Database from "./db";
import { v4 as uuid } from "uuid";
import { redirect } from "next/navigation";

export async function handleLogin(formData: FormData) {
  const tokenSession = uuid();

  cookies().set("token", tokenSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  const user = await Database.user.update({
    where: {
      RFID: formData.get("RFID") as string,
    },
    data: {
      token: tokenSession,
    },
  });

  if (user.role === "admin") {
    redirect("/admin/dashboard");
  } else {
    redirect("/user");
  }
}

export async function getSession() {
  const tokenSession = cookies().get("token")?.value;
  return tokenSession
    ? await Database.user.findFirst({
        where: {
          token: tokenSession,
        },
      })
    : null;
}
