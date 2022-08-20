-- CreateTable
CREATE TABLE "Meteor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "radius" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "Meteor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeteorItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "meteorId" INTEGER NOT NULL,

    CONSTRAINT "MeteorItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MeteorItem" ADD CONSTRAINT "MeteorItem_meteorId_fkey" FOREIGN KEY ("meteorId") REFERENCES "Meteor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
