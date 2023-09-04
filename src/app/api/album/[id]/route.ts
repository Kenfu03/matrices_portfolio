import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
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

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedAlbum = await prisma.album.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletedAlbum)
      return NextResponse.json({ message: "Note not found" }, { status: 404 });

    return NextResponse.json(deletedAlbum);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

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

export async function PUT(request: Request, { params }: Params) {
  try {
    const { album, title, section1, section2, section3, section4 } =
      await request.json();

    const updatedAlbum = await prisma.album.update({
      where: {
        id: Number(params.id),
      },
      data: {
        album,
        title,
        section1,
        section2,
        section3,
        section4,
      },
    });

    return NextResponse.json(updatedAlbum);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

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
