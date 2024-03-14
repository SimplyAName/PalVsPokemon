/*
  Warnings:

  - Added the required column `creatureId` to the `Creature` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wikiLink` to the `Creature` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Type" DROP CONSTRAINT "Type_creatureId_fkey";

-- AlterTable
ALTER TABLE "Creature" ADD COLUMN     "creatureId" TEXT NOT NULL,
ADD COLUMN     "wikiLink" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_CreatureToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CreatureToType_AB_unique" ON "_CreatureToType"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatureToType_B_index" ON "_CreatureToType"("B");

-- AddForeignKey
ALTER TABLE "_CreatureToType" ADD CONSTRAINT "_CreatureToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Creature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatureToType" ADD CONSTRAINT "_CreatureToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
