-- DropForeignKey
ALTER TABLE "Carro" DROP CONSTRAINT "Carro_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "Contato" DROP CONSTRAINT "Contato_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Contato" DROP CONSTRAINT "Contato_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "Contato" DROP CONSTRAINT "Contato_tipoContactoId_fkey";

-- DropForeignKey
ALTER TABLE "Distrito" DROP CONSTRAINT "Distrito_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "Distrito" DROP CONSTRAINT "Distrito_municipioId_fkey";

-- DropForeignKey
ALTER TABLE "Login" DROP CONSTRAINT "Login_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Login" DROP CONSTRAINT "Login_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "Municipio" DROP CONSTRAINT "Municipio_provinciaId_fkey";

-- DropForeignKey
ALTER TABLE "Reclamacao" DROP CONSTRAINT "Reclamacao_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_carroId_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_clienteId_fkey";

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_tipoContactoId_fkey" FOREIGN KEY ("tipoContactoId") REFERENCES "TipoContato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carro" ADD CONSTRAINT "Carro_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_carroId_fkey" FOREIGN KEY ("carroId") REFERENCES "Carro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Login" ADD CONSTRAINT "Login_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipio" ADD CONSTRAINT "Municipio_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "Provincia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distrito" ADD CONSTRAINT "Distrito_municipioId_fkey" FOREIGN KEY ("municipioId") REFERENCES "Municipio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Distrito" ADD CONSTRAINT "Distrito_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reclamacao" ADD CONSTRAINT "Reclamacao_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;
