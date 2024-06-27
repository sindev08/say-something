import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      {
        message: "UnAuthorized",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json(session);
};
