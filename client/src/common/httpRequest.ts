
async function httpRequest<T> (req: RequestInfo): Promise<T> {
    const res = await fetch(req)
    if (!res.ok) {
        // zmienić na konkretną klasę błędu
        res.status
        throw new Error(res.statusText);
    }

    return await res.json()
}

export default httpRequest