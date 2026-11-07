import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <li className={styles.card}>
      <div className={styles.thumb}>{project.title.charAt(0)}</div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

export default ProjectCard;