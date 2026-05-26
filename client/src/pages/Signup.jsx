import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import "../App.css";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    codeforcesHandle: "",
    leetcodeUsername: ""
  });
  const getPasswordStrength = (password) =>{
    if(!password){
      return{
        label: "",
        width: "0%",
        color: "",
        emoji: "",
      };
    }
    const hasUpperCase= /[A-Z]/.test(password);
    const hasLowerCase=/[a-z]/.test(password);
    const hasSpecialChar=/[~!@#$%^&*()_]/.test(password);
    const hasNumber=/[0-9]/.test(password);
    if((password.length >5 || password.length==5)  && hasUpperCase && hasLowerCase){
      return{
        label: "Medium",
        color: "Yellow",
        width: "60%",
        emoji: "",
      }
    };
    if(password.length==10 && hasUpperCase && hasLowerCase && hasSpecialChar && hasNumber){
      return{
        label: "Strong",
        color: "Green",
        width: "100%",
        emoji: "",
      }
    };
      return{
        label: "Weak",
        color: "Red",
        width: "30%",
        emoji: "",
    };
  };
  const passwordStrength=getPasswordStrength(data.password);

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    const { username, email, password } = data;

    if (!username || !email || !password) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok) {
        alert("Signup successful");
        navigate("/");
      } else {
        alert(result.error || "Signup failed");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        {/* LOGO */}
        <div className="logo">
          <FaCode /> DSA-Lane
        </div>

        <h1>Create Account</h1>

        {/* USERNAME */}
        <input
          placeholder="Username"
          value={data.username}
          onChange={(e) =>
            setData({ ...data, username: e.target.value })
          }
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        {/* PASSWORD */}
        <div className="PassSection">
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
          onKeyDown={(e) => e.key === "Enter" && handleSignup()}
        />
        {data.password && (
          <div className="overallstrength">
            <div className="bar">
              <div className="strength"
              style={{width: passwordStrength.width, bgcolor: passwordStrength.color,}}
              />
              </div>
              <p className="Text"
              style={{color: passwordStrength.color}}
              >
                {passwordStrength.emoji} {passwordStrength.label}
              </p>
              </div>
          )}
        </div>

        {/* CODEFORCES */}
        <input
          placeholder="Codeforces Handle (optional)"
          value={data.codeforcesHandle}
          onChange={(e) =>
            setData({ ...data, codeforcesHandle: e.target.value })
          }
        />

        {/* LEETCODE */}
        <input
          placeholder="LeetCode Username (optional)"
          value={data.leetcodeUsername}
          onChange={(e) =>
            setData({ ...data, leetcodeUsername: e.target.value })
          }
        />

        {/* BUTTON */}
        <button
          className="primary-btn"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        {/* SWITCH */}
        <p className="auth-switch">
          Already have an account?
          <span onClick={() => navigate("/")}> Sign In</span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
