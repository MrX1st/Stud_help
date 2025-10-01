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
      university: "University of Amsterdam",
      program: "Business Administration",
      year: "2023",
      image: "🇪🇸",
      category: "academic",
      rating: 5,
      story: "Studying in the Netherlands has been an incredible journey. The teaching methods here are very interactive and encourage critical thinking. I've made friends from all over the world!",
      highlights: ["Interactive Learning", "International Community", "Great Support"]
    },
    {
      id: 2,
      name: "Chen Wei",
      country: "China",
      university: "Delft University of Technology",
      program: "Computer Science",
      year: "2022",
      image: "🇨🇳",
      category: "academic",
      rating: 5,
      story: "The quality of education here is outstanding. The professors are very approachable and the facilities are world-class. I especially love the practical approach to learning.",
      highlights: ["World-Class Facilities", "Practical Learning", "Research Opportunities"]
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      country: "Egypt",
      university: "Erasmus University Rotterdam",
      program: "Economics",
      year: "2023",
      image: "🇪🇬",
      category: "social",
      rating: 4,
      story: "The Dutch culture is very welcoming and inclusive. I've learned so much not just academically but also culturally. The bike culture took some getting used to though!",
      highlights: ["Inclusive Culture", "Student Activities", "Easy Transportation"]
    },
    {
      id: 4,
      name: "Sofia Petrova",
      country: "Russia",
      university: "Utrecht University",
      program: "International Law",
      year: "2022",
      image: "🇷🇺",
      category: "cultural",
      rating: 5,
      story: "Living in Utrecht has been amazing. The city is beautiful, safe, and has a vibrant student community. I've experienced so many cultural events and made lifelong friends.",
      highlights: ["Safe Environment", "Cultural Events", "Beautiful City"]
    },
    {
      id: 5,
      name: "John Smith",
      country: "USA",
      university: "Leiden University",
      program: "Psychology",
      year: "2023",
      image: "🇺🇸",
      category: "academic",
      rating: 4,
      story: "The education system here focuses on independent learning and collaboration. It's different from what I was used to, but it has really helped me grow as a student and person.",
      highlights: ["Independent Learning", "Collaboration", "Personal Growth"]
    },
    {
      id: 6,
      name: "Yuki Tanaka",
      country: "Japan",
      university: "University of Groningen",
      program: "Environmental Science",
      year: "2022",
      image: "🇯🇵",
      category: "social",
      rating: 5,
      story: "The Netherlands is very environmentally conscious, which aligns perfectly with my studies. I love how bike-friendly everything is and how much emphasis is placed on sustainability.",
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
              <span className="stat-number">4.8</span>
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