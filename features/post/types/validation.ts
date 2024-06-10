import { z } from "zod";

// NoticeFormのバリデーションスキーマ
export const noticeFormSchema = z.object({
  content: z
    .string({
      required_error: "必須項目です．",
    })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(40, { message: "40文字以下で入力してください．" }),
  event_date: z.date({
    required_error: "必須項目です．",
  }),
  url: z
    .string({
      required_error: "必須項目です．",
    })
    // .url()
    // .min(1, { message: "1文字以上で入力してください．" })
    .max(100, { message: "100字以下で入力してください．" })
    .optional(),
});

// TechnologyFormのバリデーションスキーマ
const techSchema = z
  .string({ required_error: "必須項目です．" })
  .max(20, { message: "20文字以下で入力してください．" });

export const technologyFormSchema = z.object({
  tech0: techSchema.min(1, { message: "1文字以上で入力してください．" }),
  tech1: techSchema.min(1, { message: "1文字以上で入力してください．" }),
  tech2: techSchema.min(1, { message: "1文字以上で入力してください．" }),
  tech3: techSchema
    .min(1, { message: "1文字以上で入力してください．" })
    .optional(),
  tech4: techSchema
    .min(1, { message: "1文字以上で入力してください．" })
    .optional(),
  tech5: techSchema
    .min(1, { message: "1文字以上で入力してください．" })
    .optional(),
  tech6: techSchema
    .min(1, { message: "1文字以上で入力してください．" })
    .optional(),
  tech7: techSchema
    .min(1, { message: "1文字以上で入力してください．" })
    .optional(),
  tech8: techSchema
    .min(1, { message: "1文字以上で入力してください．" })
    .optional(),
  tech9: techSchema
    .min(1, { message: "1文字以上で入力してください．" })
    .optional(),
});

// ToolFormのバリデーションスキーマ
export const toolFormSchema = z.object({
  name: z
    .string({ required_error: "必須項目です．" })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(40, { message: "40文字以下で入力してください．" }),
  period: z
    .string({ required_error: "必須項目です．" })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(10, { message: "10文字以下で入力してください．" }),
  color: z
    .string({ required_error: "必須項目です．" })
    .regex(/#([0-9a-fA-F]{6})/g)
    .length(7),
  description: z
    .string({ required_error: "必須項目です．" })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(300, { message: "300文字以下で入力してください．" }),
  background: z
    .string({ required_error: "必須項目です．" })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(300, { message: "300文字以下で入力してください．" }),
  ingenuity: z
    .string({ required_error: "必須項目です．" })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(300, { message: "300文字以下で入力してください．" }),
  point: z
    .string({ required_error: "必須項目です．" })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(300, { message: "300文字以下で入力してください．" }),
  url: z
    .string({
      required_error: "必須項目です．",
    })
    .url()
    .min(1, { message: "1文字以上で入力してください．" })
    .max(100, { message: "100字以下で入力してください．" }),
  genre: z
    .string({
      required_error: "必須項目です．",
    })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(100, { message: "100字以下で入力してください．" }),
  tech0: techSchema.min(1, { message: "1文字以上で入力してください．" }),
  tech1: techSchema.min(1, { message: "1文字以上で入力してください．" }),
  tech2: techSchema.min(1, { message: "1文字以上で入力してください．" }),
  tech3: techSchema.optional(),
  tech4: techSchema.optional(),
  tech5: techSchema.optional(),
  tech6: techSchema.optional(),
  tech7: techSchema.optional(),
  tech8: techSchema.optional(),
  tech9: techSchema.optional(),
});

// MovieFormのバリデーションスキーマ
export const movieFormSchema = z.object({
  title: z
    .string({
      required_error: "必須項目です．",
    })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(40, { message: "40字以下で入力してください．" }),
  url: z
    .string({
      required_error: "必須項目です．",
    })
    .url()
    .min(1, { message: "1文字以上で入力してください．" })
    .max(100, { message: "100字以下で入力してください．" }),
  description: z
    .string({
      required_error: "必須項目です．",
    })
    .min(5, { message: "5文字以上で入力してください．" })
    .max(100, { message: "100字以下で入力してください．" }),
});

// GalleryFormのバリデーションスキーマ
export const galleryFormSchema = z.object({
  title: z
    .string({
      required_error: "必須項目です．",
    })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(40, { message: "40字以下で入力してください．" }),
  description: z
    .string({
      required_error: "必須項目です．",
    })
    .min(1, { message: "1文字以上で入力してください．" })
    .max(100, { message: "30字以下で入力してください．" }),
  event_date: z.date({
    required_error: "必須項目です．",
  }),
  // url: z
  //   .string({
  //     required_error: "必須項目です．",
  //   })
  //   .min(5)
  //   .max(200),
});

// FAQFormのバリデーションスキーマ
export const FAQFormSchema = z.object({
  question: z
    .string({
      required_error: "必須項目です．",
    })
    .min(5, { message: "5文字以上で入力してください．" })
    .max(40, { message: "40字以下で入力してください．" }),
  answer: z
    .string({
      required_error: "必須項目です．",
    })
    .min(5, { message: "5文字以上で入力してください．" })
    .max(300, { message: "300字以下で入力してください．" }),
});
