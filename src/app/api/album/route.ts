import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const albums = await prisma.album.findMany();
    return NextResponse.json(albums);
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

export async function POST(request: Request) {
  try {
    const { album, title, section1, section2, section3, section4 } =
      await request.json();

    const newAlbum = await prisma.album.create({
      data: {
        album,
        title,
        section1,
        section2,
        section3,
        section4,
      },
    });

    return NextResponse.json(newAlbum);
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
