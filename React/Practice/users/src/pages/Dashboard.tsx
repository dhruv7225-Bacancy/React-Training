
import { useEffect, useState } from 'react'
import { getPosts, loadComments } from '../axios/ApiClient';


const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const data = getPosts()
        data.then(d => setPosts(d.posts))
    }, [])
    function load(id: number) {
        loadComments(id)
            .then(data => {
                setPosts(posts.map((post) => {
                    if (post.id === id) {
                        post.comments = data.comments
                    }
                    return post
                }))
                console.log(posts);

            })
    }
    function hide(id: number) {
        setPosts(posts.map((post) => {
            if (post.id === id) {
                delete post.comments
            }
            return post
        }))
        console.log(posts);

    }


    return (
        <div>
            {
                posts?.map((post) => (
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        {!post.comments && <button onClick={() => load(post.id)}>load comments</button>}
                        {post.comments && <button onClick={() => hide(post.id)}>hide comments</button>}
                        {
                            post?.comments?.map((comment) => (

                                <div key={comment.id} style={{ backgroundColor: "yellow" }}>
                                    <p>{comment.body}</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard
