import Button from "./../Button/Button";
import { useState, useEffect, useCallback } from "react";
import Header from "../Header/Header";
import "./Blog.css";
const Blog = ({ supertitle, title, subtitle, description }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCounts, setpageCounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const handleLoadPost = async () => {
    setLoading(true);
    const responsePosts = await fetch(
      "https://www.mocky.io/v2/5e9278be3100005b00462cbd"
    );
    const posts = await responsePosts.json();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    handleLoadPost();
  }, []);

  useEffect(() => {
    setpageCounts(calculatePageCount());
  }, [posts]);

  const calculatePageCount = () => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  };
  const handleClicOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  }, []);
  return (
    <div>
      <Header />
      <div className="posts">
        {loading && <div> Loading </div>}
        {posts.length === 0 && <div>No Posts </div>}
        {posts.length > 0 && (
          <ul>
            {posts
              .slice(3 * activePageNumber, 3 * (activePageNumber + 1))
              .map((post) => (
                <li>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </li>
              ))}
          </ul>
        )}
        <div>
          <ul className="pagination">
            {new Array(pageCounts).fill(0).map((item, index) => (
              <li className={activePageNumber === index + 1 ? "active" : ""}>
                <Button handleClick={() => handleClicOnPages(index + 1)}>
                  {index + 1}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
