const URL = "http://localhost:3001"

export async function getAllPosts() {
    const response = await fetch(URL + "/posts")
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const data = await response.json();
    return data;
}

export async function getPostById(id) {
    const response = await fetch(URL +`/posts/${id}`)


    if (!response.ok) {
        throw Error(response.statusText);
    }


    const data = await response.json();
    return data;
}


export async function createPost(post) {
    const response = await fetch(URL +`/posts/create`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw Error(response.statusText);
    }

    const data = await response.json()
    return data
}


export async function updatePost(post) {
    const response = await fetch(URL +`/posts`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })

    if (!response.ok) {
        throw Error(response.statusText);
    }

    const data = await response.json()
    return data
}

export async function deletePost(id) {
    const response = await fetch(URL +`/posts/${id}`)


    if (!response.ok) {
        throw Error(response.statusText);
    }


    const data = await response.json();

}