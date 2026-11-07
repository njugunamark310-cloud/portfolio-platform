import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import styles from "./App.module.css";

const initialProjects = [
  { id: 1, title: "RecipeHub", description: "A recipe app." },
  { id: 2, title: "Product Dashboard", description: "Filter and remove products." },
  { id: 3, title: "Shopping App", description: "Dark mode, cart and filters." },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects((prev) => [...prev, { id: Date.now(), ...newProject }]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (projects.length === 0) {
  return <p className={styles.empty}>No projects found.</p>;
}

  return (
  <div>
    <Header />
    <main className={styles.container}>
      <ProjectForm onAddProject={addProject} />
      <section className={styles.panel}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </section>
    </main>
  </div>
);
}

export default App;