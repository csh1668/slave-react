import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`https://localhost:8080/boards/${id}`, {
            method: "DELETE"
        }).catch((e) => console.log(e));
    }

    useState(() => {
        // fetch(`https://localhost:8080/boards/${id}`)
        fetch('/../data.json')
            .then(resp => resp.json())
            .then(data => setPost(data.find(post => post.id === parseInt(id))))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Post Detail</h1>
            <p>Post ID: {id}</p>
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <p>작성자: {post.writer}</p>
                    <p>작성 시간: {post.date}</p>
                    <br />
                    <p>{post.content}</p>
                </div>
            )}
            <button onClick={handleDelete}>삭제</button>
        </div>
    )
}

export default PostDetail;