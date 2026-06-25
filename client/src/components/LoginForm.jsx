import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import "../App.css";

function LoginForm({ onSwitch, onClose }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Login failed");
        return;
      }

      localStorage.setItem("username", result.username);
      localStorage.setItem("level", result.level);
      localStorage.setItem("token", result.token);

      onClose();

      if (result.level === "Starter") {
        navigate("/dashboard");
      } else if (result.level === "Intermediate") {
        navigate("/intermediate");
      } else {
        navigate("/advanced");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">

      <div className="logo">
        <FaCode />
        DSA Lane
      </div>

      <h1>Welcome Back</h1>

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
      />

      <button
        className="primary-btn"
        disabled={loading}
        onClick={handleLogin}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>

      <p className="auth-switch">
        Don't have an account?
        <span onClick={onSwitch}> Sign Up</span>
      </p>

    </div>
  );
}

export default LoginForm;
