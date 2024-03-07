import React from 'react';
import './App.css';

// The App component is the main component of your resume
function App() {
  // This is the JSX for your resume, using Bootstrap for styling
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1>John Doe</h1>
        <p>Frontend Developer | React Enthusiast</p>
      </header>

      {/* Experience section */}
      <section className="mb-5">
        <h2>Experience</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Awesome Company</h3>
            <h4 className="card-subtitle mb-2 text-muted">Frontend Developer</h4>
            <p className="card-text">Worked on various web applications using React and modern JavaScript libraries.</p>
          </div>
        </div>
        {/* Add more cards for other experiences */}
      </section>

      {/* Education section */}
      <section className="mb-5">
        <h2>Education</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">University of Technology</h3>
            <h4 className="card-subtitle mb-2 text-muted">Bachelor's in Computer Science</h4>
            <p className="card-text">Specialized in web development and software engineering principles.</p>
          </div>
        </div>
        {/* Add more cards for other educational qualifications */}
      </section>

      {/* Skills section */}
      <section className="mb-5">
        <h2>Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">React & Redux</li>
          <li className="list-group-item">JavaScript (ES6+)</li>
          <li className="list-group-item">HTML & CSS</li>
          {/* Add more list items for other skills */}
        </ul>
      </section>

      // Certifications section
<section className="mb-5">
  <h2>Certifications</h2>
  <ul className="list-group">
    {/* List your certifications here */}
    <li className="list-group-item">Certified Web Developer - CodeSchool</li>
    <li className="list-group-item">AWS Certified Solutions Architect</li>
    {/* Add more list items for other certifications */}
  </ul>
</section>

// Projects section
<section className="mb-5">
  <h2>Projects</h2>
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">Portfolio Website</h3>
      <p className="card-text">Developed a personal portfolio website to showcase my work and skills in web development.</p>
      {/* Add links or descriptions for more projects */}
    </div>
  </div>
  {/* Add more cards for other projects */}
</section>

// Languages section
<section className="mb-5">
  <h2>Languages</h2>
  <ul className="list-group">
    {/* List the languages you speak here */}
    <li className="list-group-item">English - Native proficiency</li>
    <li className="list-group-item">Spanish - Conversational</li>
    {/* Add more list items for other languages */}
  </ul>
</section>

      {/* Footer with contact info */}
      <footer className="text-center mt-5">
        <p>Contact me at: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
      </footer>
    </div>
  );
}

export default App;
