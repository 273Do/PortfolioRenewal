/*
  Warnings:

  - You are about to drop the column `toolId` on the `Technology` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[technologyId]` on the table `Tool` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_toolId_fkey";

-- DropIndex
DROP INDEX "Technology_toolId_key";

-- AlterTable
ALTER TABLE "Technology" DROP COLUMN "toolId";

-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "technologyId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Tool_technologyId_key" ON "Tool"("technologyId");

-- AddForeignKey
ALTER TABLE "Tool" ADD CONSTRAINT "Tool_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "Technology"("id") ON DELETE SET NULL ON UPDATE CASCADE;
