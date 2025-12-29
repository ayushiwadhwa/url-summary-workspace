import { useState } from "react";
import type { Summary } from "../types/summary";
import { summarizeUrl } from "../services/summaryService";

export default function useSummaries() {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addSummary = async (url: string) => {
    try {
      setLoading(true);
      setError(null);

      // const res = await fetch("/api/summarize", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ url }),
      // });

      //  if (!res.ok) throw new Error("Failed to fetch summary");

      // const data: Summary = await res.json();
      // setSummaries((prev) => [data, ...prev]);
      const result = await summarizeUrl(url);
      setSummaries((prev) => [result, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };
  return { summaries, loading, error, addSummary };
}
