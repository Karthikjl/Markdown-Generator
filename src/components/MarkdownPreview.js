import React from "react";
import ReactMarkdown from "react-markdown";
import { saveAs } from "file-saver";

const MarkdownPreview = ({ data }) => {
  if (!data) return null;

  const markdownContent = `
# ${data.title}

${data.description}

## Features

${data.features.split(",").map((feature) => `- ${feature.trim()}`).join("\n")}

## Installation

\`\`\`bash
${data.installation}
\`\`\`

## Usage

\`\`\`bash
${data.usage}
\`\`\`

## Author

- **${data.author}**
`;

  const handleDownload = () => {
    const blob = new Blob([markdownContent], { type: "text/markdown;charset=utf-8" });
    saveAs(blob, `${data.title.replace(/\s+/g, "_").toLowerCase()}.md`);
  };

  return (
    <div>
      <h2>Markdown Preview</h2>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      <button onClick={handleDownload}>Download Markdown</button>
    </div>
  );
};

export default MarkdownPreview;
