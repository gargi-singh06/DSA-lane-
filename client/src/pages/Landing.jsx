import heroVideo from "../assets/videos/hero-video.mp4";
import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";

import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  const [stats, setStats] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const scrollRef = useRef(null);
  useEffect(() => {

  fetch("http://localhost:3000/landing/stats")
    .then((res) => res.json())
    .then((data) => {
      setStats(data);
    });

}, []);
useEffect(() => {

  const container = scrollRef.current;

  const handleScroll = () => {

    const scrollPosition =
      container.scrollTop;

    setScrolled(
      scrollPosition > 50
    );

    setShowTopButton(
      scrollPosition > 150
    );
  };

  container.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    container.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);

  return (
   <div className="landing">

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
              <a href="#stats-section">Stats</a>
            </li>
            <li>
              <a href="#journey">Journey</a>
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


 <div
    className="landing-scroll"
    ref={scrollRef}
  >
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
        <div className="hero-content">

          <h1>
            Master Data Structures
            <br />
            & Algorithms
          </h1>

          <p>
            Learn • Discuss • Grow |
            Join a thriving coding community.
          </p>

          <div className="hero-buttons">

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="about">

        <h2>Why DSA Lane?</h2>

        <p>
    DSA Lane provides a complete learning ecosystem designed to help students,
    aspiring software engineers, and competitive programmers build
    strong problem-solving skills from the ground up.
    Whether you are taking your first steps into Data Structures and
    Algorithms or preparing for technical interviews at top companies,
  </p>

  <p>
    Track your progress, engage in meaningful discussions, learn from
    community-driven insights, and develop the confidence required to
    tackle real-world coding challenges. Our goal is simple:
    transform consistency into mastery and help every learner become
    interview-ready through practice, collaboration, and continuous growth.
  </p>

      </section>
      <section id="stats-section" className="stats-section">
<h2>STATS</h2>
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
<section id="journey" className="journey">

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

        </div>

      </section>

      {/* LEVELS */}

      <section id="levels" className="levels">

        <h2>Learning Path</h2>

        <div className="level-container">

          <div className="level-card">
            <h3>Beginner</h3>
            <p></p>
          </div>

          <div className="level-card">
            <h3>Intermediate</h3>
            <p></p>
          </div>

          <div className="level-card">
            <h3>Advanced</h3>
            <p></p>
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
  scrollRef.current.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
  >
    ↑
  </button>

)}
  </div>
    </div>
  );
}

export default Landing;
