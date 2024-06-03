/*
  Warnings:

  - You are about to drop the column `tagId` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[genreId]` on the table `Tool` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_tagId_fkey";

-- DropIndex
DROP INDEX "Tool_tagId_key";

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "tagId",
ADD COLUMN     "genreId" INTEGER;

-- DropTable
DROP TABLE "Tag";

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tool_genreId_key" ON "Tool"("genreId");

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;
