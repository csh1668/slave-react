import { useState } from 'react';

function WritePost() {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => { setTitle(e.target.value); }
    const handleWriter = (e) => { setWriter(e.target.value); }
    const handleContent = (e) => { setContent(e.target.value); }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newPost = {
            title: title,
            writer: writer,
            content: content,
            date: new Date().toLocaleString()
        };
        fetch("https://localhost:8080/boards/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }).catch((e) => console.log(e));
    }

    return (
        <div>
            <h2>글쓰기 페이지</h2>
            <form>
            <input type="text" placeholder="제목을 입력하세요" value={title} onChange={handleTitle} /><br />
            <input type="text" placeholder="작성자를 입력하세요" value={writer} onChange={handleWriter} /><br />
            <textarea placeholder="내용을 입력하세요" value={content} onChange={handleContent} /><br />
            <button type="submit" onClick={handleSubmit} >글쓰기</button>
            </form>
        </div>
    )
}

export default WritePost;