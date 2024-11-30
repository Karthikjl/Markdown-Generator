import React, { useState } from "react";
import Form from "./components/Form";
import MarkdownPreview from "./components/MarkdownPreview";
import "./App.css";

const App = () => {
  const [markdownData, setMarkdownData] = useState(null);

  const handleGenerate = (data) => {
    setMarkdownData(data);
  };

  return (
    <div className="App">
      <h1>Markdown Generator</h1>
      <Form onGenerate={handleGenerate} />
      <MarkdownPreview data={markdownData} />
    </div>
  );
};

export default App;
