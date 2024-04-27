import React from 'react';

const CircularBarGraph = ({ sgpa }) => {
  const percent = (sgpa * 10) - 7.5;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percent) / 100;

  const getResultDescription = (subject, score) => {
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
    <div>
      <svg width="160" height="150">
        <circle
          r={radius}
          cx="50"
          cy="50"
          stroke="blue"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90) translate(-125, 25)"
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24">
          {sgpa}
        </text>
      </svg>
      <p>{getResultDescription('Subject', sgpa)}</p>
      <style jsx>{`
        svg {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default CircularBarGraph;
