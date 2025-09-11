/*
  Warnings:

  - Added the required column `updateAt` to the `sale_items` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sale_items" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bookId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "sale_items_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "sale_items_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_sale_items" ("bookId", "createdAt", "customerId", "id", "price", "quantity") SELECT "bookId", "createdAt", "customerId", "id", "price", "quantity" FROM "sale_items";
DROP TABLE "sale_items";
ALTER TABLE "new_sale_items" RENAME TO "sale_items";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
