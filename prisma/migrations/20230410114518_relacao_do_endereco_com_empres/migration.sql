/*
  Warnings:

  - Added the required column `empresaId` to the `Distrito` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Distrito" ADD COLUMN     "empresaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Distrito" ADD CONSTRAINT "Distrito_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
