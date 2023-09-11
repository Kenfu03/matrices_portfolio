import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const images = await prisma.images.findMany();
    return NextResponse.json(images);
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
    const { category, albumId, image, taken_date, place } =
      await request.json();

    const newImage = await prisma.images.create({
      data: {
        category,
        albumId,
        image,
        taken_date,
        place,
      },
    });

    return NextResponse.json(newImage);
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
