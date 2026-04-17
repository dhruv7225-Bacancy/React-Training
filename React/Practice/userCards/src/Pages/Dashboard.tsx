import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

const Dashboard = () => {
    const [posts, setPost] = useState([]);
    const [cookies, setCookies] = useCookies()

    console.log(cookies['authToken']);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(async data => {
                const posts = await Promise.all(
                    data.posts.map(async (post) => {
                        const res = await fetch(`https://dummyjson.com/users/${post.userId}`);
                        const user = await res.json();
                        return { ...post, user };
                    })
                );
                console.log("in", posts);
                setPost(posts)

            })
            .catch(console.log);
    }, [])
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center" }}>
            {
                posts.map((post) => (
                    <div style={{ width: "300px", margin: "20px", border: "2px solid black", padding: "20px", position: "relative" }}>
                        <div style={{display: "flex", flexWrap: "wrap",justifyContent:'flex-start',gap:"20px"}}>
                            <img src={post?.user?.image} alt="" width={30} height={30} />
                            <p>{post?.user?.firstName}</p>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {
                                post.tags.map((tag) => (
                                    <p style={{ border: "2px solid black", padding: "10px", borderRadius: "5px", margin: "10px" }}>{tag}</p>
                                ))
                            }
                        </div>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <div style={{ position: "absolute", bottom: 10, display: 'flex', justifyContent: "space-around", left: 0, right: 0 }}>
                            <div style={{ border: "2px solid black", padding: "10px", borderRadius: "5px" }}>👍🏻 {post?.reactions.likes}</div>
                            <div style={{ border: "2px solid black", padding: "10px", borderRadius: "5px" }}>👎🏻{post?.reactions.dislikes}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard
