/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Topic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Topic` DROP COLUMN `userEmail`;

-- CreateTable
CREATE TABLE `Vote` (
    `id` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NULL,
    `topicId` VARCHAR(191) NULL,

    UNIQUE INDEX `Vote_userEmail_topicId_key`(`userEmail`, `topicId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
