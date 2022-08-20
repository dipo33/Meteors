/*
  Warnings:

  - Added the required column `gameVersionId` to the `Meteor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meteor" ADD COLUMN     "gameVersionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "GameVersion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "GameVersion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Meteor" ADD CONSTRAINT "Meteor_gameVersionId_fkey" FOREIGN KEY ("gameVersionId") REFERENCES "GameVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
