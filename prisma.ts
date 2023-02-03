import { PrismaClient } from "@prisma/client"

//Propriedade log com valor query faz com que o prisma mostre no console a consulta SQL gerada pelo PrismaClient
export const prisma = new PrismaClient({
    log: ["query"]
});
