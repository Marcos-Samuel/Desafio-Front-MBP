import { z } from "zod";

export type FormData = z.infer<typeof schema>

export const schema = z.object({
    nota: z.string()
      .refine((input) => {
        const isValidNumber = /^10$|^\d(\.\d?)?$/.test(input);
        return isValidNumber;
      }, {
        message: "A nota deve ser um numero entre 0.0 e 10."
      }),
  });
  