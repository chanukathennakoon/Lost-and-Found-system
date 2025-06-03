import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItems";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div
      style={{
        backgroundImage: 'url("/lost.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "100vh"
        
      }}
    >
      <Router>
        <Navbar />
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/add" element={<ProtectedRoute><AddItem /></ProtectedRoute>} />
            <Route path="/items" element={<ProtectedRoute><ViewItems /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
