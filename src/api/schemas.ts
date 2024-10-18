import { z as r } from "zod";

export const ExampleSchema = r.object({
    test: r.string(),
});
export type TExample = r.infer<typeof ExampleSchema>;

export const ErrorResponseSchema = r.object({
    detail: r.string(),
})
export type TErrorResponse = r.infer<typeof ErrorResponseSchema>;
