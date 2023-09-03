"use client";

import { useState } from "react";
import Image from "next/image";

const AlbumForm = () => {
  const [albumName, setAlbumName] = useState<string>();
  const [albumTitle, setAlbumTitle] = useState<string>();
  const [albumSection1, setAlbumSection1] = useState<string>();
  const [albumSection2, setAlbumSection2] = useState<string>();
  const [albumSection3, setAlbumSection3] = useState<string>();
  const [albumSection4, setAlbumSection4] = useState<string>();

  return (
    <form>
      <h2>Album name</h2>
      <input
        type="text"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
      />
      <h2>Album Title</h2>
      <input
        type="text"
        value={albumTitle}
        onChange={(e) => setAlbumTitle(e.target.value)}
      />
      <h2>Album section 1</h2>
      <input
        type="text"
        value={albumSection1}
        onChange={(e) => setAlbumSection1(e.target.value)}
      />
      <h2>Album section 2</h2>
      <input
        type="text"
        value={albumSection2}
        onChange={(e) => setAlbumSection2(e.target.value)}
      />
      <h2>Album section 3</h2>
      <input
        type="text"
        value={albumSection3}
        onChange={(e) => setAlbumSection3(e.target.value)}
      />
      <h2>Album section 4</h2>
      <input
        type="text"
        value={albumSection4}
        onChange={(e) => setAlbumSection4(e.target.value)}
      />
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

  const [category, setCategory] = useState<string>();
  const [albumId, setAlbumId] = useState<number>();
  const [imageLink, setImageLink] = useState<string>();
  const [takenDate, setTakenDate] = useState<string>();
  const [place, setPlace] = useState<string>();

  return (
    <div><h2>Category</h2>
    <input
      type="text"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    />
    <h2>ALbum</h2>
    <select onChange={(e) => setAlbumId(Number(e.target.value))}>
      {example.map((album) => 
      <option value={album.id}>{album.name}</option>
      )}
    </select>
    <h2>Image Link</h2>
    <input
      type="text"
      value={imageLink}
      onChange={(e) => setImageLink(e.target.value)}
    />
    <h2>Taken Date</h2>
    <input
      type="text"
      value={takenDate}
      onChange={(e) => setTakenDate(e.target.value)}
    />
    <h2>Taken place</h2>
    <input
      type="text"
      value={place}
      onChange={(e) => setPlace(e.target.value)}
    />
    <div>
      ImagePreview
      {imageLink && <Image src={imageLink} alt="Image Link nor working" fill></Image>}
    </div>
    <h2>{albumId}</h2>
    </div>
  );
};

const ImagesView = () => {
  return <div>See images</div>;
};

const page = () => {
  const [addAlbum, setAddAlbum] = useState(false);
  const [addImages, setAddImages] = useState(false);
  const [seeImages, setSeeImages] = useState(false);

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
    <div>
      <h1>Admin Page</h1>
      <div className="admin-options">
        <button onClick={() => handleFormChange("album")}>Add Album</button>
        <button onClick={() => handleFormChange("images")}>Add Images</button>
        <button onClick={() => handleFormChange("see")}>
          See Images by Album
        </button>
      </div>
      {addAlbum && <AlbumForm />}
      {addImages && <ImagesForm />}
      {seeImages && <ImagesView />}
    </div>
  );
};

export default page;
