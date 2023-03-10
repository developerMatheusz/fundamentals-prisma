import { prisma } from "../prisma";

async function executePrisma() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true
    }
  });

  console.log(usersWithPosts);
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
