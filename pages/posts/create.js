import { createPost } from "@lib/api";
import styles from "../index.module.css";

export default function CreatePage() {
    return (
        <article className={styles.posts}>
            <h1>Welcome to the Formular</h1>
            <input type="text" placeholder="Titel"/>
            <input type="text" placeholder="Text"/>
        </article>
     
    )
}