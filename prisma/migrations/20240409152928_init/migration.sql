-- CreateTable
CREATE TABLE "Tool" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "tech0" TEXT NOT NULL,
    "tech1" TEXT NOT NULL,
    "tech2" TEXT NOT NULL,
    "tech3" TEXT,
    "tech4" TEXT,
    "tech5" TEXT,
    "tech6" TEXT,
    "tech7" TEXT,
    "tech8" TEXT,
    "tech9" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "toolId" INTEGER NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Technology_toolId_key" ON "Technology"("toolId");

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
