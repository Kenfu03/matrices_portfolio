"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useImages } from "@/context/ImagesContext";

const AlbumForm = () => {
  const [album, setAlbum] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [section1, setSection1] = useState<string>("");
  const [section2, setSection2] = useState<string>("");
  const [section3, setSection3] = useState<string>("");
  const [section4, setSection4] = useState<string>("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
      }}
    >
      <h2>Album name</h2>
      <input type="text" onChange={(e) => setAlbum(e.target.value)} />
      <h2>Album Title</h2>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <h2>Album section 1</h2>
      <input type="text" onChange={(e) => setSection1(e.target.value)} />
      <h2>Album section 2</h2>
      <input type="text" onChange={(e) => setSection2(e.target.value)} />
      <h2>Album section 3</h2>
      <input type="text" onChange={(e) => setSection3(e.target.value)} />
      <h2>Album section 4</h2>
      <input type="text" onChange={(e) => setSection4(e.target.value)} />
      <button>Save Album</button>
    </form>
  );
};

interface ExampleTypes {
  name: string;
  id: number;
}

const ImagesForm = () => {
  const example: ExampleTypes[] = [
    { name: "ManuAntu", id: 1 },
    { name: "FondaVela", id: 2 },
    { name: "Sky", id: 3 },
    { name: "Comida", id: 4 },
  ];

  const [category, setCategory] = useState<string>("");
  const [albumId, setAlbumId] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [taken_date, setTaken_date] = useState<string>("");
  const [place, setPlace] = useState<string>("");

  const { createImage } = useImages();

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createImage({
            category,
            albumId,
            image,
            taken_date,
            place,
          });
        }}
      >
        <h2>Category</h2>
        <input type="text" onChange={(e) => setCategory(e.target.value)} />
        <h2>Album</h2>
        <select onChange={(e) => setAlbumId(Number(e.target.value))}>
          {example.map((album) => (
            <option value={album.id}>{album.name}</option>
          ))}
        </select>
        <h2>File name</h2>
        <input type="text" onChange={(e) => setImage(e.target.value)} />
        <h2>Taken Date</h2>
        <input type="text" onChange={(e) => setTaken_date(e.target.value)} />
        <h2>Taken place</h2>
        <input type="text" onChange={(e) => setPlace(e.target.value)} />
        <button>Save Image</button>
      </form>
      <div>
        <h1>Image Preview</h1>
        {image && (
          <Image
            src={"https://storage.googleapis.com/images_matrices/" + image}
            alt="Loading image..."
            width={500}
            height={250}
          />
        )}
      </div>
    </>
  );
};

const ImagesView = () => {
  const example: ExampleTypes[] = [
    { name: "ManuAntu", id: 1 },
    { name: "FondaVela", id: 2 },
    { name: "Sky", id: 3 },
    { name: "Comida", id: 4 },
  ];

  const [albumId, setAlbumId] = useState<number>();

  return (
    <div>
      <h2>Select Album</h2>
      <select onChange={(e) => setAlbumId(Number(e.target.value))}>
        {example.map((album) => (
          <option key={album.id} value={album.id}>
            {album.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const page = () => {
  const [addAlbum, setAddAlbum] = useState(false);
  const [addImages, setAddImages] = useState(false);
  const [seeImages, setSeeImages] = useState(true);

  const handleFormChange = (formName: string) => {
    setAddAlbum(false);
    setAddImages(false);
    setSeeImages(false);
    if (formName === "album") {
      setAddAlbum(true);
    } else if (formName === "images") {
      setAddImages(true);
    } else {
      setSeeImages(true);
    }
  };

  return (
    <div className={styles.principalContainer}>
      <header>
        <h1>Admin Page</h1>
      </header>
      <div className={styles.adminOptions}>
        <div className={styles.menu}>
          <button onClick={() => handleFormChange("album")}>Add Album</button>
          <button onClick={() => handleFormChange("images")}>Add Images</button>
          <button onClick={() => handleFormChange("see")}>
            See Images by Album
          </button>
        </div>
        <div className={styles.formContainer}>
          {addAlbum && <AlbumForm />}
          {addImages && <ImagesForm />}
          {seeImages && <ImagesView />}
        </div>
      </div>
    </div>
  );
};

export default page;
