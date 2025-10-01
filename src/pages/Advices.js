import { useState } from "react";
import "../styles/advices.css";

function Advices() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="advices-container">
      {/* Sidebar */}
      <aside className={`advices-sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="sidebar-toggle" onClick={toggleMenu}>
          {isOpen ? "←" : "→"}
        </button>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <button
              className={`nav-item ${activeSection === "intro" ? "active" : ""}`}
              onClick={() => scrollToSection("intro")}
            >
              <span className="nav-icon">📚</span>
              <span className="nav-text">Introduction</span>
            </button>
          </div>

          <div className="nav-section">
            <div className="nav-category"
            onClick={() => scrollToSection("uni-tips")}>
              <span className="category-icon">🎓</span>
              <span className="category-text">For University</span>
            </div>
            <button
              className={`nav-item sub-item ${activeSection === "uni-tips" ? "active" : ""}`}
              onClick={() => scrollToSection("uni-tips")}
            >
              <span className="nav-icon">💡</span>
              <span className="nav-text">University Tips</span>
            </button>
            <button
              className={`nav-item sub-item ${activeSection === "uni-guidelines" ? "active" : ""}`}
              onClick={() => scrollToSection("uni-guidelines")}
            >
              <span className="nav-icon">📋</span>
              <span className="nav-text">University Guidelines</span>
            </button>
          </div>

          <div className="nav-section">
            <div className="nav-category"
            onClick={() => scrollToSection("study-tips")}>
              <span className="category-icon">👨‍🎓</span>
              <span className="category-text">For Students</span>
            </div>
            <button
              className={`nav-item sub-item ${activeSection === "study-tips" ? "active" : ""}`}
              onClick={() => scrollToSection("study-tips")}
            >
              <span className="nav-icon">✏️</span>
              <span className="nav-text">Study Tips</span>
            </button>
            <button
              className={`nav-item sub-item ${activeSection === "campus-life" ? "active" : ""}`}
              onClick={() => scrollToSection("campus-life")}
            >
              <span className="nav-icon">🏫</span>
              <span className="nav-text">Campus Life</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Content */}
      <main className="advices-content">
        <section id="intro" className="content-section intro-section">
          <div className="section-header">
            <h1>Welcome to Advices</h1>
            <p className="section-subtitle">
              Your comprehensive guide for academic excellence and institutional growth
            </p>
          </div>
          <div className="intro-cards">
            <div className="intro-card">
              <div className="card-icon">🎓</div>
              <h3>For Universities</h3>
              <p>Strategic insights and best practices for institutional development</p>
            </div>
            <div className="intro-card">
              <div className="card-icon">👨‍🎓</div>
              <h3>For Students</h3>
              <p>Practical tips for academic success and personal growth</p>
            </div>
          </div>
        </section>

        <section id="uni-tips" className="content-section university-section">
          <div className="section-header">
            <h2>University Tips</h2>
            <p className="section-subtitle">
              Strategies for enhancing institutional effectiveness
            </p>
          </div>
          <div className="content-grid">
            <div className="advice-card">
              <div className="card-number">01</div>
              <h3>Curriculum Innovation</h3>
              <p>
                Regularly update course content to reflect current industry trends
                and emerging technologies. Involve industry professionals in
                curriculum design to ensure relevance.
              </p>
            </div>
            <div className="advice-card">
              <h3 className="card-number">02</h3>
              <h3>Research Opportunities</h3>
              <p>
                Create accessible research programs for undergraduate students.
                Provide funding, mentorship, and infrastructure to support
                innovative research projects.
              </p>
            </div>
            <div className="advice-card">
              <div className="card-number">03</div>
              <h3>Faculty Development</h3>
              <p>
                Invest in continuous professional development for faculty members.
                Encourage participation in conferences, workshops, and
                collaborative research initiatives.
              </p>
            </div>
            <div className="advice-card">
              <div className="card-number">04</div>
              <h3>Student Support Services</h3>
              <p>
                Establish comprehensive support systems including counseling,
                career guidance, and academic tutoring to ensure student success.
              </p>
            </div>
          </div>
        </section>

        <section id="uni-guidelines" className="content-section university-section">
          <div className="section-header">
            <h2>University Guidelines</h2>
            <p className="section-subtitle">
              Core principles for effective institutional management
            </p>
          </div>
          <div className="guidelines-list">
            <div className="guideline-item">
              <div className="guideline-icon">🎯</div>
              <div className="guideline-content">
                <h3>Transparency & Communication</h3>
                <p>
                  Maintain open channels of communication between administration,
                  faculty, and students. Regularly share institutional goals,
                  decisions, and financial information.
                </p>
              </div>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">🤝</div>
              <div className="guideline-content">
                <h3>Inclusivity & Diversity</h3>
                <p>
                  Foster an inclusive environment that welcomes diverse
                  perspectives. Implement policies that promote equal
                  opportunities for all members of the academic community.
                </p>
              </div>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">💰</div>
              <div className="guideline-content">
                <h3>Resource Allocation</h3>
                <p>
                  Strategically distribute resources to maximize educational
                  outcomes. Prioritize investments in technology, infrastructure,
                  and human capital.
                </p>
              </div>
            </div>
            <div className="guideline-item">
              <div className="guideline-icon">📊</div>
              <div className="guideline-content">
                <h3>Quality Assurance</h3>
                <p>
                  Implement robust quality assurance mechanisms. Regularly assess
                  and improve teaching methods, learning outcomes, and
                  institutional processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="study-tips" className="content-section student-section">
          <div className="section-header">
            <h2>Study Tips</h2>
            <p className="section-subtitle">
              Proven techniques for academic excellence
            </p>
          </div>
          <div className="content-grid">
            <div className="advice-card">
              <div className="card-number">01</div>
              <h3>Active Recall</h3>
              <p>
                Test yourself regularly instead of passively re-reading notes.
                Use flashcards, practice questions, and teach concepts to others
                to strengthen memory retention.
              </p>
            </div>
            <div className="advice-card">
              <div className="card-number">02</div>
              <h3>Spaced Repetition</h3>
              <p>
                Review material at increasing intervals over time. This technique
                leverages the psychological spacing effect to improve long-term
                retention.
              </p>
            </div>
            <div className="advice-card">
              <div className="card-number">03</div>
              <h3>Time Management</h3>
              <p>
                Use techniques like the Pomodoro method (25-minute focused work
                sessions). Create a study schedule and stick to it consistently.
              </p>
            </div>
            <div className="advice-card">
              <div className="card-number">04</div>
              <h3>Group Study</h3>
              <p>
                Collaborate with peers to discuss complex topics and share
                insights. Teaching others reinforces your own understanding.
              </p>
            </div>
            <div className="advice-card">
              <div className="card-number">05</div>
              <h3>Healthy Habits</h3>
              <p>
                Maintain proper sleep, nutrition, and exercise routines. A healthy
                body supports a sharp mind and better academic performance.
              </p>
            </div>
            <div className="advice-card">
              <div className="card-number">06</div>
              <h3>Note-Taking Strategies</h3>
              <p>
                Use methods like Cornell notes or mind mapping. Organize
                information visually to make connections between concepts clearer.
              </p>
            </div>
          </div>
        </section>

        <section id="campus-life" className="content-section student-section">
          <div className="section-header">
            <h2>Campus Life</h2>
            <p className="section-subtitle">
              Making the most of your university experience
            </p>
          </div>
          <div className="campus-grid">
            <div className="campus-card">
              <div className="campus-icon">🎭</div>
              <h3>Join Organizations</h3>
              <p>
                Participate in student clubs, sports teams, and cultural
                organizations. These activities help you develop leadership skills
                and build lasting friendships.
              </p>
              <ul className="campus-list">
                <li>Explore different interests</li>
                <li>Build your network</li>
                <li>Develop soft skills</li>
              </ul>
            </div>
            <div className="campus-card">
              <div className="campus-icon">⚖️</div>
              <h3>Balance & Wellbeing</h3>
              <p>
                Find harmony between academics, extracurriculars, and personal
                time. Don't overcommit—quality over quantity is key.
              </p>
              <ul className="campus-list">
                <li>Set realistic goals</li>
                <li>Practice self-care</li>
                <li>Know when to say no</li>
              </ul>
            </div>
            <div className="campus-card">
              <div className="campus-icon">🌟</div>
              <h3>Build Relationships</h3>
              <p>
                Connect with professors, advisors, and mentors. These
                relationships can provide guidance, opportunities, and valuable
                references for your future.
              </p>
              <ul className="campus-list">
                <li>Attend office hours</li>
                <li>Seek mentorship</li>
                <li>Network actively</li>
              </ul>
            </div>
            <div className="campus-card">
              <div className="campus-icon">🚀</div>
              <h3>Career Preparation</h3>
              <p>
                Take advantage of career services, internships, and networking
                events. Start building your professional profile early.
              </p>
              <ul className="campus-list">
                <li>Attend career fairs</li>
                <li>Apply for internships</li>
                <li>Update your resume</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Advices;