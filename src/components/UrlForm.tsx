import { useState } from "react";
interface UrlFormProps {
  onSubmit: (url: string) => void;
  loading: boolean;
}
export default function UrlForm({ onSubmit, loading }: UrlFormProps) {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    onSubmit(url);
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        name="url"
        placeholder="Enter URL to summarize"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        required
        disabled={loading}
      />
      <button disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>
    </form>
  );
}
