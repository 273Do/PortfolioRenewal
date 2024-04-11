import prisma from "../../../../lib/prismaClient";

// 特定のお知らせに関する処理
// 更新処理
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { content, event_date } = await req.json();
  await prisma.notice.update({
    where: { id },
    data: { event_date, content },
  });
}

// 削除処理
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  await prisma.notice.delete({
    where: { id },
  });
}
