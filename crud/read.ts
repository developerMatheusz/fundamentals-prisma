import { prisma } from "../prisma";

async function executePrisma() {
  const users = await prisma.user.findMany();

  console.log(users);
}

executePrisma()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
