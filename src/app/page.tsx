import SearchGit from "@/src/modules/SearchGit/SearchGit";
import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Search GitHub</h1>
      <SearchGit />
    </main>
  );
}