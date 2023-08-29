-- CreateTable
CREATE TABLE "Images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "taken_date" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    CONSTRAINT "Images_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
