import prisma from "@/lib/prismaClient";

// 特定のFAQに関する処理
// 削除処理
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  await prisma.faq.delete({
    where: { id },
  });
}
