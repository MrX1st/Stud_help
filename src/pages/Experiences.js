// src/pages/Experiences.jsx
import { useState } from 'react';
import '../styles/experiences.css';

export default function Experiences() {
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data - you can replace this with your actual data later
  const experiences = [
    {
      id: 1,
      name: "Maria Garcia",
      country: "Spain",
      university: "Urfu University",
      program: "Business Administration",
      year: "2023",
      image: "🇪🇸",
      category: "academic",
      rating: 5,
      story: "When I struggled with my first programming assignment in Java, I felt completely lost. I went to the professor’s office hours, and instead of just giving me the solution, he patiently explained how the logic worked and encouraged me to think step by step. By the end of the semester, I actually passed the course with a good grade. That moment showed me that professors at UrFU really care if you are willing to put in the effort",
      highlights: ["Interactive Learning", "Helpful professors", "Great Support"]
    },
    {
      id: 2,
      name: "Chen Wei",
      country: "China",
      university: "Urfu University",
      program: "Computer Science",
      year: "2022",
      image: "🇨🇳",
      category: "academic",
      rating: 5,
      story: "My visa was about to expire, and I panicked because I didn’t fully understand the Russian migration system. I went to the International Student Office, and one of the coordinators literally walked me through every form. They even called the migration service on my behalf. It took some time, but without their help, I could have been fined or even had to leave Russia. It made me feel secure that the university backs me up in critical moments",
      highlights: ["Great Support", "Seek Help", "Documents"]
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      country: "Egypt",
      university: "Urfu University",
      program: "Economics",
      year: "2023",
      image: "🇪🇬",
      category: "social",
      rating: 4,
      story: "In the beginning, I was shy and didn’t know anyone. But the dormitory life changed everything. My roommates and neighbors were from Vietnam, Egypt, and Kazakhstan, and we quickly started cooking together, sharing recipes from home, and celebrating New Year in different traditions. It made me feel like I wasn’t just surviving abroad — I was building a second family. To this day, my closest friends in Russia are the people I met in that dorm",
      highlights: ["Inclusive Culture", "Student Activities", "Daily Life"]
    },
    {
      id: 4,
      name: "Sofia Petrova",
      country: "Russia",
      university: "Urfu University",
      program: "International Law",
      year: "2022",
      image: "🇷🇺",
      category: "cultural",
      rating: 3,
      story: "One day, I tried to start a conversation with some classmates in the cafeteria. I smiled, said hello, and asked them a simple question about the homework. They gave me short, one-word answers and quickly went back to talking with each other. I felt ignored and a bit hurt, and I started wondering if I had done something wrong",
      highlights: ["Safe Environment", "Cultural Events", "Beautiful City"]
    },
    {
      id: 5,
      name: "Kulio Sanchez",
      country: "Colombia",
      university: "Urfu University",
      program: "Psychology",
      year: "2023",
      image: "🇺🇸",
      category: "academic",
      rating: 2,
      story: "In one of my courses, the professor spoke only Russian and refused to explain anything in English. During the exam, I tried to answer in broken Russian, but he interrupted me and said he couldn’t understand. I felt humiliated in front of the class. After that, I talked to the program coordinator, who arranged for a tutor to help me. The situation improved, but I realized that sometimes you really need to push for help, otherwise your problems may be ignored",
      highlights: ["Independent Learning", "Seek Help", "Personal Growth"]
    },
    {
      id: 6,
      name: "Yuki Tanaka",
      country: "Japan",
      university: "Urfu University",
      program: "Environmental Science",
      year: "2022",
      image: "🇯🇵",
      category: "social",
      rating: 3,
      story: "Living in the dormitory was cheap, but sometimes really hard. The bathrooms were not always clean, and one of my neighbors constantly played loud music at night. I complained to the dorm administration, but they didn’t do much. It really tested my patience. On the positive side, I learned to be more independent and to solve conflicts myself, but I honestly think the dorm conditions could be improved",
      highlights: ["Sustainability Focus", "Green Living", "Active Lifestyle"]
    }
  ];

  const countries = ['all', ...new Set(experiences.map(exp => exp.country))];
  const categories = [
    { value: 'all', label: 'All Experiences' },
    { value: 'academic', label: 'Academic' },
    { value: 'social', label: 'Social Life' },
    { value: 'cultural', label: 'Cultural' }
  ];

  const filteredExperiences = experiences.filter(exp => {
    const countryMatch = selectedCountry === 'all' || exp.country === selectedCountry;
    const categoryMatch = selectedCategory === 'all' || exp.category === selectedCategory;
    return countryMatch && categoryMatch;
  });

  return (
    <div className="experiences-page">
      {/* Hero Section */}
      <section className="experiences-hero">
        <div className="hero-content">
          <h1 className="hero-title">Student Experiences</h1>
          <p className="hero-subtitle">
            Discover authentic stories from international students studying in the Netherlands
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">International Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3.6</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-group">
            <label htmlFor="country-filter">
              <span className="filter-icon">🌍</span>
              Filter by Country
            </label>
            <select
              id="country-filter"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="filter-select"
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country === 'all' ? 'All Countries' : country}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="category-filter">
              <span className="filter-icon">📂</span>
              Filter by Category
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-grid-section">
        <div className="experiences-container">
          <h2 className="section-title">
            {filteredExperiences.length} {filteredExperiences.length === 1 ? 'Story' : 'Stories'} Found
          </h2>
          
          <div className="experiences-grid">
            {filteredExperiences.map(experience => (
              <div key={experience.id} className="experience-card">
                <div className="card-header">
                  <div className="student-avatar">{experience.image}</div>
                  <div className="student-info">
                    <h3 className="student-name">{experience.name}</h3>
                    <p className="student-country">{experience.country}</p>
                  </div>
                  <div className="rating">
                    {'⭐'.repeat(experience.rating)}
                  </div>
                </div>

                <div className="card-body">
                  <div className="university-info">
                    <span className="university-icon">🎓</span>
                    <div>
                      <p className="university-name">{experience.university}</p>
                      <p className="program-name">{experience.program}</p>
                    </div>
                  </div>

                  <p className="experience-story">{experience.story}</p>

                  <div className="highlights">
                    {experience.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <span className="year-badge">Class of {experience.year}</span>
                  <span className={`category-badge ${experience.category}`}>
                    {experience.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No experiences found</h3>
              <p>Try adjusting your filters to see more stories</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Share Your Experience</h2>
          <p>Are you an international student? Share your story and inspire others!</p>
          <button className="cta-button">Submit Your Story</button>
        </div>
      </section>
    </div>
  );
}