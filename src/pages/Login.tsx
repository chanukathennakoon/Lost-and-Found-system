import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("token", "fake-jwt-token");
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}
