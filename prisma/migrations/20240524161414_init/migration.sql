/*
  Warnings:

  - Added the required column `background` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingenuity` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `point` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Tool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "background" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "ingenuity" TEXT NOT NULL,
ADD COLUMN     "period" TEXT NOT NULL,
ADD COLUMN     "point" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
