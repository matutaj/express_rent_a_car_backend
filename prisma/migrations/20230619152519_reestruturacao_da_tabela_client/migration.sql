/*
  Warnings:

  - You are about to drop the column `numeroBI` on the `Cliente` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Cliente_numeroBI_key";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "numeroBI";
