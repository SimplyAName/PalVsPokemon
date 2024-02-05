-- CreateTable
CREATE TABLE "Creature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "originGame" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Creature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "creatureId" INTEGER,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature"("id") ON DELETE SET NULL ON UPDATE CASCADE;
