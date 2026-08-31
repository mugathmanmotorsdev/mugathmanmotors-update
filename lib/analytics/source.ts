const SOURCE_KEY = "mugathman_source";

function captureFromUrl(): string | null {
    if (typeof window === "undefined") return null;

    const params = new URLSearchParams(window.location.search);

    if (params.has("fbclid")) return "facebook";
    if (params.get("utm_source") === "facebook") return "facebook";

    return null;
}

export function captureSource(): void {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SOURCE_KEY)) return;

    const source = captureFromUrl();
    if (source) {
        sessionStorage.setItem(SOURCE_KEY, source);
    }
}

export function getSource(): string | null {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(SOURCE_KEY);
}