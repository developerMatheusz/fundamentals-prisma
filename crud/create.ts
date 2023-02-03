import { prisma } from "../prisma";

async function executePrisma() {

    const user = await prisma.user.create({
        data: {
            name: "João", 
            email: "joaocarlos@gmail.com", 
            posts: {
                create: {
                    title: "Mundo do Programador da Web", 
                    content: "Neste módulo vamos aprender um pouco sobre como realizar um CRUD com prisma ORM", 
                    published: true
                }
            }
        }
    });

    console.log(user);

}

executePrisma()
    .then(async () => {
        await prisma.$disconnect();
    }).catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });
