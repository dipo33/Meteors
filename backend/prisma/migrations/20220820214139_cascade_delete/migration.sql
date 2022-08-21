-- DropForeignKey
ALTER TABLE "Meteor" DROP CONSTRAINT "Meteor_gameVersionId_fkey";

-- DropForeignKey
ALTER TABLE "MeteorItem" DROP CONSTRAINT "MeteorItem_meteorId_fkey";

-- AddForeignKey
ALTER TABLE "Meteor" ADD CONSTRAINT "Meteor_gameVersionId_fkey" FOREIGN KEY ("gameVersionId") REFERENCES "GameVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeteorItem" ADD CONSTRAINT "MeteorItem_meteorId_fkey" FOREIGN KEY ("meteorId") REFERENCES "Meteor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
