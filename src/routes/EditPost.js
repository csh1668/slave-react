function EditPost(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => { setTitle(e.target.value); }
    const handleContent = (e) => { setContent(e.target.value); }

    const handleSubmit = (e) => {
        e.preventDefault();
        let editedPost = {
            number: props.postId,
            title: title,
            writer: writer,
            content: content,
            date: new Date().toLocaleString()
        };
        fetch(`https://localhost:8080/boards/${props.postId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedPost)
        }).catch((e) => console.log(e));
    }

    return (
        <div>
            <h2>글 수정 페이지</h2>
            <form>
                <input type="text" placeholder="제목을 입력하세요" value={title} onChange={handleTitle} /><br />
                <textarea placeholder="내용을 입력하세요" value={content} onChange={handleContent} /><br />
                <button type="submit" onClick={handleSubmit} >수정하기</button>
            </form>
        </div>
    )
}

export default EditPost;