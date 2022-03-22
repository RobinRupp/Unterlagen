import { useEffect, useState } from "react"
import styles from "./PostForm.module.css"

const defaultModel = {
    title: "",
    text: ""
}

function validateModel(post) {
    const errors = {
        title: " ",
        text: " "
    }
    let isValid = true

    // Hier musst du den Post validieren und die Fehlermeldung auf dem errors Objekt setzen
    // Wenn der Post nicht valide ist, musst zu auch isValid = false setzen.
    // denn Aufruf findest du in der Funktion handleSubmit unten

    return { errors, isValid }
}

export default function PostForm({ postToEdit }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)

    useEffect(() => {
        if (postToEdit) {
            setPost(postToEdit)
        }
    }, [postToEdit])

    const handleChange = (e) => {
        // Hier musst du die Werte aus dem Formular in den Post schreiben

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        if (post.id) {
            // Post updaten


        } else {
            // Post erstellen

        }

        setIsLoading(false)
    }

    return (
        <div className={styles.postform}>

        </div>
    )
}