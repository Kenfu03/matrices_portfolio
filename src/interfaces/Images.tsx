import { Images } from "@prisma/client";

export type CreateImages = Omit<Images, "id" | "createdAt" | "updatedAt">;

export type UpdateImages = Partial<CreateImages>;

export interface imageType {
    id: number,
    category: string,
    albumId: number,
    image: string,
    taken_date: string,
    place: string
}

export interface Image {
    category: string,
    albumId: number,
    image: string,
    taken_date: string,
    place: string
}