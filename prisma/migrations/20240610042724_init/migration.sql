/*
  Warnings:

  - You are about to drop the column `genreId` on the `Tool` table. All the data in the column will be lost.
  - You are about to drop the column `technologyId` on the `Tool` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[toolId]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[toolId]` on the table `Technology` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_genreId_fkey";

-- DropForeignKey
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_technologyId_fkey";

-- DropIndex
DROP INDEX "Tool_genreId_key";

-- DropIndex
DROP INDEX "Tool_technologyId_key";

-- AlterTable
ALTER TABLE "Genre" ADD COLUMN     "toolId" INTEGER;

-- AlterTable
ALTER TABLE "Technology" ADD COLUMN     "toolId" INTEGER;

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "genreId",
DROP COLUMN "technologyId";

-- CreateIndex
CREATE UNIQUE INDEX "Genre_toolId_key" ON "Genre"("toolId");

-- CreateIndex
CREATE UNIQUE INDEX "Technology_toolId_key" ON "Technology"("toolId");

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;
