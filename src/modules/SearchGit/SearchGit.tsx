"use client"

import { useState } from "react";
import SearchBar from "../SearchGit/feature/SearchBar/SearchBar";
import UserCard from "../SearchGit/feature/UserCard/UserCard";
import styles from "./SearchGit.module.scss"

const SearchGit = () => {
  const [user, setUser] = useState(null);
  const [isUserSearched, setIsUserSearched] = useState(false);

  const fetchUser = async (username: string) => {
    setIsUserSearched(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
        setUser(null);
        return;
      }
      const data = await res.json();
      setUser(data);
  };

  return (
    <div className={styles.wrapper}>
      <SearchBar onSearch={fetchUser} />
      <UserCard user={user} isUserSearched={isUserSearched} />
    </div>
  );
};

export default SearchGit;