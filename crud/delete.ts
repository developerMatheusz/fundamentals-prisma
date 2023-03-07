import { prisma } from "../prisma";

async function executePrisma() {
  const user = await prisma.user.deleteMany();

  console.log(user);
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
