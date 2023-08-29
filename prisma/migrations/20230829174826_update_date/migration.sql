-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "taken_date" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    CONSTRAINT "Images_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Images" ("albumId", "category", "id", "image", "place", "taken_date") SELECT "albumId", "category", "id", "image", "place", "taken_date" FROM "Images";
DROP TABLE "Images";
ALTER TABLE "new_Images" RENAME TO "Images";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
