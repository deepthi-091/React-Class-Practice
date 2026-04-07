import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const containerStyle = {
  padding: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
  transition: "transform 0.2s",
};
export default function AxiosApi() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.log("Data failed to download", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      <h2>Posts</h2>

      <div style={gridStyle}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={cardStyle}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}