/*
  Warnings:

  - You are about to drop the column `dataEntrga` on the `Reserva` table. All the data in the column will be lost.
  - Added the required column `dataEntrega` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reserva" DROP COLUMN "dataEntrga",
ADD COLUMN     "dataEntrega" TIMESTAMP(3) NOT NULL;
