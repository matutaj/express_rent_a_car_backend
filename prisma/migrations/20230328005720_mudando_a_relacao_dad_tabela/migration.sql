/*
  Warnings:

  - You are about to drop the column `telefone` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `telefone2` on the `Cliente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "telefone",
DROP COLUMN "telefone2";
