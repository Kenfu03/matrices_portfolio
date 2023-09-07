import React from 'react'
import Image from 'next/image'
import styles from "./MainImage.module.css"
import img from "@/resources/images/fondaVela1.jpg"

export const MainImage = () => {
  return (
    <div className={styles.imageContainer}>
        <Image src={img} alt="Main image" fill priority/>
        <div className={styles.textContainer}>
            <h1>Fotografía para tu empresa</h1>
            <p>Hacemos cada evento único, lleno de...</p>
            <h1>Matrices</h1>
        </div>
    </div>
  )
}

