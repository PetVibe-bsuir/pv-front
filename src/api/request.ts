import { type ZodSchema } from "zod";
import { formatZodError, getAuthCookie } from "@/utils";
import { ErrorResponseSchema } from "@/api/schemas.ts";
import { type TRoutes, type ApiResponse } from "@/api/api.ts";
import dayjs from "dayjs";

const API_DEBUG = import.meta.env.API_DEBUG ?? false;

const BASE_URL = "http://localhost:5000";

export const debugLog = (...params: unknown[]) =>
    API_DEBUG ? console.debug(`[API DEBUG] - ${dayjs().format("mm:ss.sss")}\n`, ...params) : {};

export type RequestParams = {
    fetchParams?: RequestInit;
    searchParams?: URLSearchParams;
};
export const request = async <T>(
    path: TRoutes,
    schema: ZodSchema<T>,
    { fetchParams = {}, searchParams = new URLSearchParams({}) }: RequestParams = {},
): ApiResponse<T> => {
    try {
        const _getAuth = () => {
            return getAuthCookie();
        };
        const url = BASE_URL + path + (searchParams?.size ? "?" + searchParams.toString() : "");
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: _getAuth() ?? "",
            },
            ...fetchParams,
        });

        if (!response.ok) {
            const errorResponse = ErrorResponseSchema.safeParse(await response.json());
            const error = new Error(
                errorResponse.success
                    ? errorResponse.data.detail
                    : formatZodError(errorResponse.error),
            );
            return {
                success: false,
                error: error,
            };
        }

        const data = await response.json();
        const result = schema.safeParse(data);

        debugLog("response on url: " + url + ":\n", data);

        if (result.success) {
            return result;
        }
        return {
            success: false,
            error: new Error(formatZodError(result.error)),
        };
    } catch (e) {
        return {
            success: false,
            error: new Error(
                e?.toString() ??
                    "Unknown error occurred when requesting data from backend:\n" +
                        String(e) +
                        "----\n",
            ),
        };
    }
};
