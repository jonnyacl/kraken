import { useState } from "react";

export const useGraphQL = (onFinish: Function = () => { }) => {
    const [response, setResponse] = useState<any | undefined>(undefined);
    const [loading, setLoading] = useState(false);

    return { response, loading };
};