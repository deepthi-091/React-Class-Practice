import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const detailsStyle = {
  padding: "30px",
  maxWidth: "600px",
  margin: "auto",
};
export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={detailsStyle}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}