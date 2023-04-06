import { Cliente, Empresa, Login } from "@prisma/client";
import { ILogin, TipagemDado } from "../ILogin";
import { prisma } from "../../../../prisma/client";


class LoginRepositorio implements ILogin{
   async criar({ email, clientId, empresaId, password}: TipagemDado): Promise<Login> {
        const criarLogin = await prisma.login.create({data:{
            email, clientId, empresaId, password
        }})
        return criarLogin;
    }

    async listarClienteId(id: string): Promise<Cliente | undefined> {
        const listarClient = await prisma.cliente.findUnique({where:{id}}) || undefined;

        return listarClient;
    }

    async listarEmail(email: string): Promise<Login | undefined> {
        const listEmail = await prisma.login.findFirst({where:{email}}) || undefined;

        return listEmail;
    }
    async listarEmpresaId(id: string): Promise<Empresa | undefined> {
        const listEmpresa = await prisma.empresa.findUnique({where:{id}}) || undefined;

        return listEmpresa;
    }
    async apagar(email: string): Promise<void> {
        await prisma.login.delete({where:{email}})
    }

  async atualizar({ email, clientId, empresaId, password }: TipagemDado): Promise<Login> {
      const atualizarLogin = await prisma.login.update({where:{email},data:{clientId, empresaId, password }})

      return atualizarLogin;
  }
}