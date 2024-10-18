export const AUTH_COOKIE_NAME = import.meta.env.AUTH_COOKIE_NAME ?? "Authorization";
export const setAuthCookie = (value: string) => {
    document.cookie = AUTH_COOKIE_NAME + "=" + value;
};
