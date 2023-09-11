"use client"
import { useEffect } from "react";
import { imageType } from "@/interfaces/Images"
import { useImages } from "@/context/ImagesContext";
import Image from "next/image";
import  styles  from "./MainBody.module.css"



export const MainBody = () => {
  const { images, loadImages } = useImages();

  useEffect(()=> {
    loadImages()
  }, [])
  return (
    <div className={styles.imagesContainer}>
      {images.map((image: imageType) => (
        <div key={image.id} className={styles.imageDiv}>
          <Image src={"https://storage.googleapis.com/images_matrices/" + image.image} 
          fill
          alt={image.image}/>
        </div>
      ))}
    </div>
  );
};
