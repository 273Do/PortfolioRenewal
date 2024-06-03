// 特定の映像投稿に関する処理

import prisma from "@/lib/prismaClient";

// 更新処理
export async function PUT(
  req: Response,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { title, description, url } = await req.json();
  await prisma.movie.update({
    where: { id },
    data: { title, description, url },
  });
}

// 削除処理
export async function DELETE({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.movie.delete({
    where: { id },
  });
}
