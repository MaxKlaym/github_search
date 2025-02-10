"use client";

import { useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => Promise<void>;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      await onSearch(query.trim());
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={styles.searchButton} disabled={!query.trim()}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;