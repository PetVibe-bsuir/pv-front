import { useEffect, useRef, useState } from "react";

const useThrottle = <T>(value: T, ms: number = 200) => {
    const [state, setState] = useState<T>(value);
    const timeout = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        timeout.current = setTimeout(() => {
            setState(value);
        }, ms);

        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [ms, value]);

    return state;
};

export default useThrottle;
