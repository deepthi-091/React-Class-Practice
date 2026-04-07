import { useEffect, useState } from "react";
import styles from "./FetchApi.module.css";
export default function FetchApi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Data failed to download", error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Users (Fetch API)</h3>
      {users.map((user) => (
        <p key={user.id} className={styles.user}>{user.name}</p>
      ))}
    </div>
  );
}