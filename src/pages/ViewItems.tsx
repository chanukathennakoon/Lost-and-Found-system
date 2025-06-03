import { useEffect, useState } from "react";

type Item = {
  title: string;
  description: string;
  status: string;
};

export default function ViewItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<Item>({ title: "", description: "", status: "lost" });

 
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(savedItems);
  }, []);

 
  const updateLocalStorage = (updatedItems: Item[]) => {
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const deleteItem = (index: number) => {
    const updated = [...items];
    updated.splice(index, 1);
    updateLocalStorage(updated);
  };

  const startEdit = (index: number) => {
    setEditIndex(index);
    setEditItem(items[index]);
  };

  
  const saveEdit = () => {
    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = editItem;
      updateLocalStorage(updated);
      setEditIndex(null);
    }
  };

 
  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="container">
      <h2>Items</h2>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className={`card mb-3 border-${item.status === "lost" ? "danger" : "success"}`}>
                <div className="card-body">
                  {editIndex === index ? (
                    <>
                      <input
                        className="form-control mb-2"
                        value={editItem.title}
                        onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                      />
                      <textarea
                        className="form-control mb-2"
                        value={editItem.description}
                        onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                      />
                      <select
                        className="form-control mb-2"
                        value={editItem.status}
                        onChange={(e) => setEditItem({ ...editItem, status: e.target.value })}
                      >
                        <option value="lost">Lost</option>
                        <option value="found">Found</option>
                      </select>
                      <button className="btn btn-success btn-sm me-2" onClick={saveEdit}>Save</button>
                      <button className="btn btn-secondary btn-sm" onClick={cancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <span className={`badge bg-${item.status === "lost" ? "danger" : "success"} mb-2`}>
                        {item.status.toUpperCase()}
                      </span>
                      <br />
                      <button className="btn btn-warning btn-sm me-2" onClick={() => startEdit(index)}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteItem(index)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
