import { useState, useEffect } from 'react';

export function useCmsData<T>(fetcher: () => Promise<T>, deps: unknown[] = []) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetcher()
            .then(result => { if (!cancelled) { setData(result); setLoading(false); } })
            .catch(err  => { if (!cancelled) { setError(err);   setLoading(false); } });
        return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return { data, loading, error };
}
