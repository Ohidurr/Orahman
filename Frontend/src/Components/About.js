import React, { useState } from 'react';
import '../css/About.css'; // Corrected import path

function About() {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
    // Optional: Scroll to the resume view when opened
    if (!showResume) {
      setTimeout(() => {
        document.getElementById("resumeView").scrollIntoView({ behavior: 'smooth' });
      }, 100); // Adjust timing if necessary
    }
  };

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>Passionate about learning and implementing innovative protocols to drive industries towards their goals. With a proven track record of reshaping industries, I thrive on tackling challenges head-on. Outside of work, I enjoy music, reading, hiking, and exploring new destinations. Let's connect and collaborate for success!</p>
      <button onClick={toggleResume} className="view-resume-button">View My Resume</button>
      {showResume && (
        <div id="resumeView" className="resume-container">
          <object data={`${process.env.PUBLIC_URL}/resume.pdf`} type="application/pdf" width="100%" height="600">
            <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>Download PDF</a>.</p>
          </object>
        </div>
      )}
    </div>
  );
}

export default About;
