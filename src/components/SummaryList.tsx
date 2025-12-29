import type { Summary } from "../types/summary";

export default function SummaryList({ summaries }: { summaries: Summary[] }) {
  return (
    <ul>
      {summaries.map((summary) => (
        <li key={summary.id}>{summary.content}</li>
      ))}
    </ul>
  );
}
