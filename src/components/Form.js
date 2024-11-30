import React, { useState } from "react";

const Form = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    features: "",
    installation: "",
    usage: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <textarea
        name="features"
        placeholder="Features (comma-separated)"
        value={formData.features}
        onChange={handleChange}
        required
      />
      <textarea
        name="installation"
        placeholder="Installation Instructions"
        value={formData.installation}
        onChange={handleChange}
        required
      />
      <textarea
        name="usage"
        placeholder="Usage Instructions"
        value={formData.usage}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author Name"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <button type="submit">Generate Markdown</button>
    </form>
  );
};

export default Form;
