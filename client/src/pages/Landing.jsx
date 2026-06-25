import heroVideo from "../assets/videos/hero-video.mp4";
import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";
import {
  FaUsers,
  FaComments,
  FaChartLine,
  FaTrophy,
  FaUserCircle,
  FaSignal,
} from "react-icons/fa";
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
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    setScrolled(scrollPosition > 50);
    setShowTopButton(scrollPosition > 150);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
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
<h2>Platform Statistics</h2>
<div className="landing-stats-grid">

  <div className="stat-card stat-green">
    <FaUsers className="land-stat-icon" />
    <h2>
      <CountUp end={stats.totalUsers || 0} duration={2} />
    </h2>
    <p>Problems Solved</p>
  </div>

  <div className="stat-card stat-blue">
    <FaComments className="land-stat-icon" />
    <h2>
      <CountUp end={stats.totalPosts || 0} duration={2} />
    </h2>
    <p>Community Posts</p>
  </div>

  <div className="stat-card stat-purple">
    <FaUsers className="land-stat-icon" />
    <h2>
      <CountUp end={stats.beginnerPosts || 0} duration={2} />
    </h2>
    <p>Active Members</p>
  </div>
</div>
</section>
<section id="journey" className="journey">

  <h2>Your DSA Journey</h2>

  <div className="roadmap">

    <div className="roadmap-step">
      <div className="step-number">01</div>
      <h3>Sign Up</h3>
      <p>
        Create your account and unlock access
        to structured DSA learning paths and
        community features.
      </p>
    </div>

    <div className="roadmap-line"></div>

    <div className="roadmap-step">
      <div className="step-number">02</div>
      <h3>Choose Your Level</h3>
      <p>
        Start with Beginner, Intermediate,
        or Advanced based on your current
        problem solving experience.
      </p>
    </div>

    <div className="roadmap-line"></div>

    <div className="roadmap-step">
      <div className="step-number">03</div>
      <h3>Solve Problems</h3>
      <p>
        Practice curated DSA questions and
        strengthen your coding foundations
        through consistency.
      </p>
    </div>

    <div className="roadmap-line"></div>

    <div className="roadmap-step">
      <div className="step-number">04</div>
      <h3>Join Discussions</h3>
      <p>
        Learn from community insights,
        share approaches, and explore
        different problem solving strategies.
      </p>
    </div>

    <div className="roadmap-line"></div>

    <div className="roadmap-step">
      <div className="step-number">05</div>
      <h3>Interview Ready</h3>
      <p>
        Build confidence for coding rounds
        and technical interviews through
        continuous practice.
      </p>
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

    <div className="feature-card feature-green">
      <FaChartLine className="feature-icon" />
      <h3>Problem Tracking</h3>
      <p>Track solved problems and monitor progress.</p>
    </div>

    <div className="feature-card feature-blue">
      <FaComments className="feature-icon" />
      <h3>Discussion Forum</h3>
      <p>Ask questions and learn from the community.</p>
    </div>

    <div className="feature-card feature-purple">
      <FaTrophy className="feature-icon" />
      <h3>Leaderboards</h3>
      <p>Compare performance and stay motivated.</p>
    </div>

    <div className="feature-card feature-gold">
      <FaUserCircle className="feature-icon" />
      <h3>User Profiles</h3>
      <p>Showcase activity, achievements, and growth.</p>
    </div>

    <div className="feature-card feature-green">
      <FaChartLine className="feature-icon" />
      <h3>Analytics</h3>
      <p>Visual insights into your learning journey.</p>
    </div>

  </div>

</section>
      {/* LEVELS */}
<section id="levels" className="levels">

  <h2>Skill Levels</h2>

  <p className="levels-subtitle">
    DSA Lane automatically categorizes learners
    based on their coding profiles and current
    problem-solving ability.
  </p>

  <div className="level-container">

    <div className="level-card">

      <h3>
  <FaSignal className="level-icon beginner-icon" />
  Beginner
</h3>

      <p>
        Starting your problem-solving journey and
        building confidence through consistent
        practice and learning.
      </p>

    </div>

    <div className="level-card">

      <h3>
  <FaChartLine className="level-icon intermediate-icon" />
  Intermediate
</h3>

      <p>
        Comfortable with common patterns and
        actively improving speed, accuracy,
        and solution quality.
      </p>

    </div>

    <div className="level-card">

     <h3>
  <FaTrophy className="level-icon advanced-icon" />
  Advanced
</h3>

      <p>
        Strong competitive and interview-level
        problem solver capable of handling
        complex challenges efficiently.
      </p>

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
    </div>
  );
}

export default Landing;
