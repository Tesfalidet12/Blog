import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/", {
      method: "post",
      header: { "content-type": "applicaition-json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br></br>
        <label>Blog Body </label>
        <textarea
          required
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        ></textarea>
        <br />
        <label>Blog Author</label>
        <select
          required
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        >
          <option value="mario">Mario</option>
          <option value="Tesfa">tesfa</option>
          <option value="John Doe">John Doe</option>
        </select>
        <br />
        <div className="btn">
          {!isPending && <button>Add Blog</button>}
          {isPending && <button>Adding Blog...</button>}
        </div>
      </form>
      <p>{author}</p>
    </div>
  );
};

export default Create;
