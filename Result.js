import React, { useState, useEffect } from 'react';
import './result.scss';
import axios from 'axios';
import CircularBarGraph from './CircularBarGraph/CircularBarGraph';

const Result: React.FC = () => {
  // Assuming your JSON structure is like { "math": 85, "reading": 75, "writing": 90 }
  // const data = require('../../Assets/predictions.json'); // Update the JSON file path
  const [scores, setScores] = useState({
    math: null,
    reading: null,
    writing: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    // Fetch scores from the backend
    axios.get('http://localhost:5000/get_scores')
      .then(response => {
        console.log('Response from backend:', response.data);
        const data = response.data;
        setScores({
          math: data.math,
          reading: data.reading,
          writing: data.writing
        });
      })
      .catch(error => {
        console.error('Error fetching scores:', error);
      });
  }, []);

  const getResultDescription = (subject: string, score: number | null) => {
    if (score === null || isNaN(score)) {
      return `Loading ${subject} score...`;
    } else if (score >= 85) {
      return `Excellent! Your ${subject} score is very high.`;
    } else if (score >= 70) {
      return `Good job! Your ${subject} score is above average.`;
    } else if (score >= 50) {
      return `Keep practicing! Your ${subject} score is average or slightly below.`;
    } else {
      return `Uh oh! Your ${subject} score needs improvement. Let's work together to improve it.`;
    }
  };

  return (
    <div className="result-container">
      <div className="result-percentage-circle">
        {/* Add key prop to each div */}
        <div key="math">
          <CircularBarGraph sgpa={scores.math} />
          <p className="result-description">{getResultDescription('Math', scores.math)}</p>
        </div>
        <div key="reading">
          <CircularBarGraph sgpa={scores.reading} />
          <p className="result-description">{getResultDescription('Reading', scores.reading)}</p>
        </div>
        <div key="writing">
          <CircularBarGraph sgpa={scores.writing} />
          <p className="result-description">{getResultDescription('Writing', scores.writing)}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
