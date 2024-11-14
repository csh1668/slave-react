import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/PostDetail.css';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`https://localhost:8080/boards/${id}`, {
            method: "DELETE"
        }).catch((e) => console.log(e));
    }

    useEffect(() => {
        fetch('/../data.json')
            .then(resp => resp.json())
            .then(data => setPost(data.find(post => post.id === parseInt(id))))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div className="detail-container">
            <h1 className="detail-title">Post Detail</h1>
            {post ? (
                <div>
                    <p className="detail-info">작성자: {post.writer}</p>
                    <p className="detail-info">작성 시간: {post.date}</p>
                    <div className="detail-content">{post.content}</div>
                </div>
            ) : <p>Loading...</p>}
            <button className="delete-button" onClick={handleDelete}>삭제</button>
        </div>
    )
}

export default PostDetail;