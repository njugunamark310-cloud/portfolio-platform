import styles from "./SearchBar.module.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;