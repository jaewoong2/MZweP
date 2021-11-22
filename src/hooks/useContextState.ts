import { useState, useCallback } from "react";

const useContextState = <T>(value: T): [T, (value: T) => void] => {
    const [state, setState_] = useState<T>(value);
    const setState = useCallback((value: T) => {
        setState_(value);
    }, []);


    return [state, setState];
}

export default useContextState;
