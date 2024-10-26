import React from 'react';
import '../Styles/Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <h1>Achievements</h1>
        
        <div className="achievement-item">
          <h2>1st place - JABIL GBS Competition</h2>
          <p>
            Led the team that won 1st place in the "Leading the Digital Future" competition in Penang, Malaysia, demonstrating leadership and technical expertise.
          </p>
        </div>

        <div className="achievement-item">
          <h2>2nd place - INTI-USC Competition</h2>
          <p>
            Developed an app that earned 2nd place in the Business Service Sector competition in Kuala Lumpur, Malaysia.
          </p>
        </div>

        <div className="achievement-item">
          <h2>Outstanding Contribution Award - INTI University</h2>
          <p>
            Recognized for outstanding contributions as a university ambassador, playing a key role in promoting the institution and its values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
