import { useState } from "react";

export default function AddItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("lost");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const item = { title, description, status };
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    localStorage.setItem("items", JSON.stringify([...items, item]));
    alert("Item added!");
    setTitle("");
    setDescription("");
    setStatus("lost");
  };

  return (
    <div className="container">
      <h2>Add Lost/Found Item</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <select className="form-control mb-2" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
