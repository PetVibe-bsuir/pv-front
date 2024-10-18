import { TApi } from "@/api/api.ts";
import {TExample} from "@/api/schemas";


const examples: TExample[] = [
    {
        test: "123",
    }
];

export const mockApi: TApi = {
    example() {
        return Promise.resolve({success: true, data: examples});
    }
};
