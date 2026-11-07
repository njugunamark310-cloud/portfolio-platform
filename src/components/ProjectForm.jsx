import { useState } from "react";
import styles from "./ProjectForm.module.css";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onAddProject({ title: title.trim(), description: description.trim() });
    setTitle("");
    setDescription("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;