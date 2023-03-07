import { prisma } from "../prisma";

async function executePrisma() {
  const idPost = await prisma.post.findFirst({
    select: {
      id: true
    }
  });

  if (idPost) {
    const post = await prisma.post.update({
      where: {
        id: idPost.id
      },
      data: {
        title: "Programador Mobile com React Native"
      }
    });

    console.log(post);
  }
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
