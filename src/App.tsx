import { useState } from "react";
import UrlForm from "./components/UrlForm";
import useSummaries from "./hooks/useSummaries";
import SummaryList from "./components/SummaryList";
import "./App.css";

function App() {
  const { summaries, loading, error, addSummary } = useSummaries();

  return (
    <>
      <h1>URL Summarizer</h1>
      <div>
        <UrlForm onSubmit={addSummary} loading={loading} />
      </div>
      <div>
        <SummaryList summaries={summaries} />
      </div>
    </>
  );
}

export default App;
