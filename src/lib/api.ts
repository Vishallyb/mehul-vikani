// Base URL of the backend API. In dev, Vite proxies "/api" to the backend (see vite.config.ts).
export const API_URL = (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, "");

// Origin that serves uploaded files ("/uploads/..."): the backend when VITE_API_URL is absolute, else this site (dev proxy)
const ASSET_ORIGIN = /^https?:\/\//.test(API_URL) ? new URL(API_URL).origin : "";

export const assetUrl = <T extends string | undefined>(url: T): T =>
  (url && url.startsWith("/uploads/") ? `${ASSET_ORIGIN}${url}` : url) as T;

// Points uploaded images inside rich text HTML at the backend
export const resolveHtmlAssets = (html: string) => html.replace(/(src=")(\/uploads\/)/g, `$1${ASSET_ORIGIN}$2`);

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || `Request failed (${res.status})`);
  return json as T;
}
