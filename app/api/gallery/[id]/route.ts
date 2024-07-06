import prisma from "@/lib/prismaClient";

// 特定のgalleryに関する処理

// 更新処理
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { event_date, title, description, url } = await req.json();
  await prisma.gallery.update({
    where: { id },
    data: { event_date, title, description, url },
  });
}

// 削除処理
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  await prisma.gallery.delete({
    where: { id },
  });
}
