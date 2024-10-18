import { ExampleSchema, TExample } from "@/api/schemas.ts";
import { request } from "@/api/request.ts";
import { mockApi } from "@/api/mock.ts";
import {z as r} from 'zod';

export type ApiResponse<T> = Promise<{ success: true; data: T } | { success: false; error: Error }>;

export type TRoutes =
    | "/";
export type TApi = {
    example(): ApiResponse<TExample[]>;
};

const Api: TApi = {
    example() {
        return request("/", r.array(ExampleSchema));
    },
};

export default import.meta.env.DEV ? mockApi : Api;
