import { GithubUser } from "../../domain/types";
import { Card } from "antd";
import styles from "./UserCard.module.scss";

interface UserCardProps {
  user: GithubUser | null;
  isUserSearched: boolean;
}

const UserCard = ({ user, isUserSearched }: UserCardProps) => {
  if (isUserSearched && !user) {
    return <div className={styles.errorMessage}>User not found</div>;
  }
  if (!user) {
    return null;
  }

  return (
    <Card
    hoverable
      className={styles.card}
      cover={<img alt={user.login} src={user.avatar_url} className={styles.avatar} />}
      onClick={() => window.open(user.html_url, "_blank")}
    >
      <Card.Meta title={user.name || user.login} description={user.bio || "No description"} />

    </Card>
  );
};

export default UserCard;