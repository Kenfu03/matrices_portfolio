"use client";

import { createContext, useState, useContext } from "react";
import { Image, imageType } from "@/interfaces/Images";

export const ImagesContext = createContext<{
  images: imageType[];
  loadImages: () => Promise<void>;
  createImage: (image: Image) => Promise<void>;
}>({
  images: [],
  loadImages: async () => {},
  createImage: async (image: Image) => {},
});

export const useImages = () => {
  const context = useContext(ImagesContext)
  if (!context) {
    throw new Error('UseNotes must be used within a ImagesProvider')
  }
  return context;
}

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [images, setImages] = useState<imageType[]>([]);

  async function loadImages() {
    const res = await fetch("http://localhost:3000/api/imagesDB");
    const data = await res.json();
    setImages(data);
  }

  async function createImage(image:Image) {
    const res = await fetch("/api/imageDB", {
      method: "POST",
      body: JSON.stringify(image),
      headers: {
        "Content-type": "application/json",
      },
    });
    const newImage = await res.json();
    setImages([...images, newImage]);
  }
  return (
    <ImagesContext.Provider value={{ images, loadImages, createImage }}>
      {children}
    </ImagesContext.Provider>
  );
};
