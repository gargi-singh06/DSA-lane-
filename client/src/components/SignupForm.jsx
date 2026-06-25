import { useState } from "react";
import {
  FaCode,
  FaCheck,
  FaShieldAlt,
  FaExclamationTriangle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "../App.css";

function SignupForm({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    codeforcesHandle: "",
    leetcodeUsername: "",
  });

  const getPasswordStrength = (password) => {
    if (!password)
      return {
        label: "",
        width: "0%",
        color: "",
        emoji: "",
      };

    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const special = /[~!@#$%^&*()_]/.test(password);

    if (
      password.length === 10 &&
      upper &&
      lower &&
      number &&
      special
    ) {
      return {
        label: "Strong",
        width: "100%",
        color: "green",
        emoji: <FaCheck />,
      };
    }

    if (password.length >= 5 && upper && lower) {
      return {
        label: "Medium",
        width: "60%",
        color: "orange",
        emoji: <FaShieldAlt />,
      };
    }

    return {
      label: "Weak",
      width: "30%",
      color: "red",
      emoji: <FaExclamationTriangle />,
    };
  };

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_~";

    const all = upper + lower + numbers + special;

    let password =
      upper[Math.floor(Math.random() * upper.length)] +
      lower[Math.floor(Math.random() * lower.length)] +
      numbers[Math.floor(Math.random() * numbers.length)] +
      special[Math.floor(Math.random() * special.length)];

    while (password.length < 10) {
      password += all[Math.floor(Math.random() * all.length)];
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setData({
      ...data,
      password,
    });
  };

  const passwordStrength = getPasswordStrength(data.password);

  const handleSignup = async () => {
    const { username, email, password } = data;

    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const special = /[~!@#$%^&*()_]/.test(password);

    if (
      !(
        password.length === 10 &&
        upper &&
        lower &&
        number &&
        special
      )
    ) {
      alert("Enter a valid password.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:3000/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Signup Failed");
        return;
      }

      alert("Signup Successful");

      onSwitch();
    } catch (err) {
      console.log(err);
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

      <h1>Create Account</h1>

      <input
        placeholder="Username"
        value={data.username}
        onChange={(e) =>
          setData({
            ...data,
            username: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        type="email"
        value={data.email}
        onChange={(e) =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
      />

      <div className="PassSection">

        <div className="inputContainer">

          <input
            type={showPassword ? "text" : "password"}
            maxLength={10}
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />

          <button
            className="eyeBtn"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <p
          className="password-suggest"
          onClick={generatePassword}
        >
          Suggest Strong Password
        </p>

        {data.password && (
          <div className="overallstrength">

            <div className="bar">

              <div
                className="strength"
                style={{
                  width: passwordStrength.width,
                  backgroundColor: passwordStrength.color,
                }}
              />

            </div>

            <p
              className="Text"
              style={{
                color: passwordStrength.color,
              }}
            >
              {passwordStrength.emoji}
              {" "}
              {passwordStrength.label}
            </p>

          </div>
        )}

      </div>

      <input
        placeholder="Codeforces Handle (Optional)"
        value={data.codeforcesHandle}
        onChange={(e) =>
          setData({
            ...data,
            codeforcesHandle: e.target.value,
          })
        }
      />

      <input
        placeholder="Leetcode Username (Optional)"
        value={data.leetcodeUsername}
        onChange={(e) =>
          setData({
            ...data,
            leetcodeUsername: e.target.value,
          })
        }
      />

      <button
        className="primary-btn"
        disabled={loading}
        onClick={handleSignup}
      >
        {loading ? "Creating..." : "Sign Up"}
      </button>

      <p className="auth-switch">
        Already have an account?
        <span onClick={onSwitch}> Sign In</span>
      </p>

    </div>
  );
}

export default SignupForm;
