import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";

function ProjectList({ projects }) {
  return (
    <ul className={styles.list}>
      {projects.length === 0 ? (
        <li>No projects found.</li>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </ul>
  );
}

export default ProjectList;