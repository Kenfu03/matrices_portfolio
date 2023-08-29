-- CreateTable
CREATE TABLE "Images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,
    "image" BLOB,
    "taken_date" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    CONSTRAINT "Images_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "album" TEXT NOT NULL,
    "title" TEXT,
    "section1" TEXT,
    "section2" TEXT,
    "section3" TEXT,
    "section4" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Album_album_key" ON "Album"("album");
