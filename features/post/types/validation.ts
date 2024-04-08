import { z } from "zod";

// NoticeFormのバリデーションスキーマ
const noticeFormSchema = z.object({
  content: z
    .string({
      required_error: "必須項目です．",
    })
    .min(5, { message: "5文字以上で入力してください．" })
    .max(40, { message: "40字以下で入力してください．" }),
  event_date: z.date({
    required_error: "必須項目です．",
  }),
});

export { noticeFormSchema };
