import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home(){
  return (

    <div className="home-container">
      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <h1>University Adaptation Support</h1>
              <p>
                A collaborative platform connecting students and teachers to improve 
                university adaptation. Get the support you need to pass your exams, 
                understand assignments, and successfully complete your semester.
              </p>
              <div className="button-group">
                <Link 
                  className="button"
                  to="/experiences"
                >
                  Experiences
                </Link>
                <Link 
                  className="button button-outline"
                  to="/info"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="services">
          <div className="container">
            <h2>How We Support University Adaptation</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>General Academic Improvement</h3>
                <p>
                  Comprehensive suggestions and strategies to improve your chances 
                  of passing semester exams. Collaborative advice from both students 
                  and teachers based on real university experiences.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Clear Assignment Instructions</h3>
                <p>
                  Teachers and experienced students help make assignment requirements 
                  clearer and more understandable, with detailed explanations and 
                  step-by-step guidance for better adaptation.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3>Semester Completion Strategy</h3>
                <p>
                  Learn from both student experiences and teacher insights how to 
                  successfully complete your semester. Concrete action plans and 
                  timelines for meeting all academic requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-content">
              <h2>Our Mission & Goals</h2>
              <p>
                We create a collaborative environment where students and teachers work 
                together to improve university adaptation. Our platform bridges the gap 
                between academic expectations and student understanding, fostering better 
                communication and learning outcomes.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">Students</div>
                  <div className="stat-label">Share Experiences</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Teachers</div>
                  <div className="stat-label">Provide Guidance</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Together</div>
                  <div className="stat-label">Build Success</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta" id="contact">
          <div className="container">
            <h2>Join Our University Adaptation Community</h2>
            <p>Whether you're a student or teacher, contribute to improving university adaptation together.</p>
            <Link to="/contact" className="button button-outline">Get Involved</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;