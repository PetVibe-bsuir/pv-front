import Api, { type TApi } from "./api.ts";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type QueryKey = string | Record<string, unknown>;

const getQueryKeys = (unique: string, params: Record<string, unknown> = {}): QueryKey[] => {
    const paramsAsKeys = Object.entries(params).reduce(
        (acc, [key, value]) => {
            return acc.concat({ [key]: value ?? "EMPTY" });
        },
        [] as Record<string, unknown>[],
    );
    return ([unique] as QueryKey[]).concat(paramsAsKeys);
};

type Options<Route extends keyof TApi> = Partial<UseQueryOptions<Awaited<ReturnType<TApi[Route]>>>>;

export const useGetExample = (options?: Options<"example">) => {
    return useQuery({
        ...options,
        queryFn: () => Api.example(),
        queryKey: getQueryKeys("example"),
    });
};