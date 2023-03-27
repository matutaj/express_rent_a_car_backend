/*
  Warnings:

  - You are about to drop the column `telefone` on the `Empresa` table. All the data in the column will be lost.
  - You are about to drop the column `telefone2` on the `Empresa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Empresa" DROP COLUMN "telefone",
DROP COLUMN "telefone2";

-- CreateTable
CREATE TABLE "Contato" (
    "id" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "tipoContactoId" TEXT NOT NULL,
    "clienteId" TEXT,
    "empresaId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoContato" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TipoContato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_tipoContactoId_fkey" FOREIGN KEY ("tipoContactoId") REFERENCES "TipoContato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
