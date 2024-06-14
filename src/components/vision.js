import React from 'react';

const Vision = () => {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <div className="icon">🏞️</div>
        <div className="stat-number">7</div>
        <div className="stat-label">Acres State-of-the-art Sports Campus</div>
      </div>
      <div className="stat-box">
        <div className="icon">🎓</div>
        <div className="stat-number">17:1</div>
        <div className="stat-label">Student-Teacher Ratio</div>
      </div>
      <div className="stat-box">
        <div className="icon">🏟️</div>
        <div className="stat-number">14</div>
        <div className="stat-label">Sports Activities</div>
      </div>
      <div className="stat-box">
        <div className="icon">🏫</div>
        <div className="stat-number">40</div>
        <div className="stat-label">Clubs</div>
      </div>
      <div className="stat-box">
        <div className="icon">👨‍👩‍👧‍👦</div>
        <div className="stat-number">3200</div>
        <div className="stat-label">Students</div>
      </div>

      <style jsx>{`
        .stats-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 20px;
          background-color: #f0f0f0;
        }
        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          background-color: #1e73be;
          color: white;
          border-radius: 8px;
          width: 150px;
          text-align: center;
        }
        .stat-box:nth-child(2n) {
          background-color: #4caf50;
        }
        .icon {
          font-size: 2em;
          margin-bottom: 10px;
        }
        .stat-number {
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .stat-label {
          font-size: 1em;
        }
      `}</style>
    </div>
  );
};

export default Vision;
