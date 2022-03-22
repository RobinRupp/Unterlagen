import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { getAllPosts } from "@lib/api";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    loadPosts();
  }, []);

  return (
    <article className={styles.posts}>
      <h1> Welcome to my blog! </h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </article>
  )
}
