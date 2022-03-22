import { useRouter } from "next/router";
import styles from "../../index.module.css";
import { useState, useEffect } from "react";
import { getPostById } from "@lib/api";

export default function IndexPage() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if(!id) return
    const loadPost = async () => {
      const post = await getPostById(id);
      setPost(post);
    };
    loadPost();
  }, [id]);

  return post && (
    <article className={styles.posts}>
        <h1>Welcome to the Article Nr.{id}</h1>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <button>Edit</button>
        <button>Delete</button>
    </article>
    
  );
}
