import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const album = await prisma.album.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!album) {
      return NextResponse.json(
        {
          message: "Album not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(album);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
