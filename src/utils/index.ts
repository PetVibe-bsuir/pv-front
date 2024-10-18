import { getCookie } from './getCookie.ts';
import { AUTH_COOKIE_NAME } from './AuthCookies.ts';
import { ZodError } from "zod";

const getAuthCookie = () => {
    return getCookie(AUTH_COOKIE_NAME);
};

const formatZodError = (e: ZodError): string => {
    return (
        "Error validating backend response: " +
        e.errors.map((a) => a.message).join(" and ")
    );
};

export { setAuthCookie } from './AuthCookies.ts';
export {
    AUTH_COOKIE_NAME,
    formatZodError,
    getCookie,
    getAuthCookie,
}
