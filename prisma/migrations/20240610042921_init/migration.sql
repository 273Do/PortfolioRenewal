/*
  Warnings:

  - You are about to drop the column `toolId` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `toolId` on the `Technology` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[technologyId]` on the table `Tool` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[genreId]` on the table `Tool` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Genre" DROP CONSTRAINT "Genre_toolId_fkey";

-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_toolId_fkey";

-- DropIndex
DROP INDEX "Genre_toolId_key";

-- DropIndex
DROP INDEX "Technology_toolId_key";

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "toolId";

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "toolId";

-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "genreId" INTEGER,
ADD COLUMN     "technologyId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Tool_technologyId_key" ON "Tool"("technologyId");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_genreId_key" ON "Tool"("genreId");

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
