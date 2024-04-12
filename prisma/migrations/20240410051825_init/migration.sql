-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_toolId_fkey";

-- AlterTable
ALTER TABLE "Technology" ALTER COLUMN "toolId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE SET NULL ON UPDATE CASCADE;
