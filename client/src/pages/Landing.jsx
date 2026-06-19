import heroVideo from "../assets/videos/hero-video.mp4";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  const [stats, setStats] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  useEffect(() => {

  fetch("http://localhost:3000/landing/stats")
    .then((res) => res.json())
    .then((data) => {
      setStats(data);
    });

}, []);
useEffect(() => {

  const handleScroll = () => {

  if (window.scrollY > 50) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }

  if (window.scrollY > 150) {
    setShowTopButton(true);
  } else {
    setShowTopButton(false);
  }

};

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);

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

        <nav
  className={
    scrolled
      ? "navbar scrolled"
      : "navbar"
  }
>

          <div className="logo">

  <div className="logo-icon">
    &lt;/&gt;
  </div>

  <div className="logo-text">
    DSA Lane
  </div>

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
      <section className="stats-section">

  <div className="stat-card">
    <h2>
  <CountUp
    end={stats.totalUsers || 0}
    duration={2}
  />
</h2>
    <p>Problems Solved</p>
  </div>

  <div className="stat-card">
    <h2>
  <CountUp
    end={stats.totalPosts || 0}
    duration={2}
  />
</h2>
    <p>Community Posts</p>
  </div>

  <div className="stat-card">
    <h2>
  <CountUp
    end={stats.beginnerPosts || 0}
    duration={2}
  />
</h2>
    <p>Active Members</p>
  </div>

</section>
<section className="journey">

  <h2>Your DSA Journey</h2>

  <div className="timeline">

    <div className="step">
      Sign Up
    </div>

    <div className="step">
      Choose Level
    </div>

    <div className="step">
      Solve Problems
    </div>

    <div className="step">
      Join Discussions
    </div>

    <div className="step">
      Become Interview Ready
    </div>

  </div>

</section>
<section className="community-preview">

  <h2>Community Discussions</h2>

  <div className="discussion-card">

      <h3>
        Best approach for Two Sum?
      </h3>

      <p>
        15 replies • Beginner
      </p>

  </div>

  <div className="discussion-card">

      <h3>
        Graph BFS vs DFS
      </h3>

      <p>
        21 replies • Intermediate
      </p>

  </div>

</section>
<section className="testimonials">

  <h2>
    What Learners Say
  </h2>

  <div className="testimonial">

    <p>
      "DSA Lane helped me stay consistent
      and improve my problem solving."
    </p>

    <span>
      - Community Member
    </span>

  </div>

</section>
<section className="parallax">

  <div className="parallax-overlay">

    <h2>
      Learn Together.
      Grow Together.
    </h2>

  </div>

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
      {showTopButton && (

  <button
    className="scroll-top-btn"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  >
    ↑
  </button>

)}

    </div>
  );
}

export default Landing;
