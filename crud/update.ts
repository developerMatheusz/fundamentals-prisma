import { prisma } from "../prisma";

async function executePrisma() {

    const idUser = await prisma.post.findFirst({
        select: {
            id: true
        }
    });

    console.log(idUser);

    if (idUser) {

        const users = await prisma.post.update({ 
            where: {
                id: idUser.id
            }, 
            data: {
                title: "Programador Mobile com React Native"
            }
        });

        console.log(users);

    }

}

executePrisma()
    .then(async () => {
        await prisma.$disconnect();
    }).catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });
