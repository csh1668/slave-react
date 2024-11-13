import { useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
    // 게시글을 저장할 
    const [posts, setPosts] = useState([]);

    useState(() => {
        // fetch('https://localhost:8080/boards')
        fetch('data.json') // 더미 데이터
            .then(resp => resp.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/list/${post.id}`}>{post.title} by {post.writer}</Link>
                    </li>
                ))}
            </ul>
            <Link to={'/write'}>Write Post</Link>
        </div>
    )
}

export default PostList;