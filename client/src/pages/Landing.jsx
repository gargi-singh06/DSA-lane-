import heroVideo from "../assets/videos/hero-video.mp4";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">

      {/* HERO */}

      <section className="hero">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <nav className="navbar">

          <div className="logo">
            DSA Lane
          </div>

          <ul>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#features">Features</a>
            </li>

            <li>
              <a href="#levels">Levels</a>
            </li>

          </ul>

          <div className="auth-buttons">

            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">
                Sign Up
              </button>
            </Link>

          </div>

        </nav>

        <div className="hero-content">

          <h1>
            Master Data Structures
            <br />
            & Algorithms
          </h1>

          <p>
            Learn. Discuss. Grow.
            Join a thriving coding community.
          </p>

          <div className="hero-buttons">

            <Link to="/signup">
              <button>
                Get Started
              </button>
            </Link>

            <a href="#features">
              <button className="secondary-btn">
                Explore Features
              </button>
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="about">

        <h2>Why DSA Lane?</h2>

        <p>
          Structured learning paths,
          community discussions,
          real coding growth and
          interview preparation.
        </p>

      </section>

      {/* FEATURES */}

      <section id="features" className="features">

        <h2>Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            Problem Tracking
          </div>

          <div className="feature-card">
            Discussion Forum
          </div>

          <div className="feature-card">
            Leaderboards
          </div>

          <div className="feature-card">
            User Profiles
          </div>

          <div className="feature-card">
            Analytics
          </div>

          <div className="feature-card">
            Password Generator
          </div>

        </div>

      </section>

      {/* LEVELS */}

      <section id="levels" className="levels">

        <h2>Learning Path</h2>

        <div className="level-container">

          <div className="level-card">
            <h3>Beginner</h3>
            <p>Arrays, Strings, Sorting</p>
          </div>

          <div className="level-card">
            <h3>Intermediate</h3>
            <p>Stacks, Queues, Trees</p>
          </div>

          <div className="level-card">
            <h3>Advanced</h3>
            <p>Graphs, DP, Greedy</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Ready To Begin Your DSA Journey?
        </h2>

        <Link to="/signup">
          <button>
            Join Now
          </button>
        </Link>

      </section>

      {/* FOOTER */}

      <footer>

        <h3>DSA Lane</h3>

        <p>
          Learn • Discuss • Grow
        </p>

      </footer>

    </div>
  );
}

export default Landing;
