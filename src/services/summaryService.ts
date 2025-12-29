import type { Summary } from "../types/summary";

export async function summarizeUrl(url: string): Promise<Summary> {
  await new Promise((res) => setTimeout(res, 800));

  if (!url.startsWith("http")) {
    throw new Error("Please enter a valid URL");
  }

  return {
    id: crypto.randomUUID(),
    url,
    content: `Mock summary generated for ${url}`,
    createdAt: new Date().toISOString(),
  };
}
