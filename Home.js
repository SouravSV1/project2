import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';

const Home = (props) => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [raceEthnicity, setRaceEthnicity] = useState('');
  const [parentalEducation, setParentalEducation] = useState('');
  const [lunch, setLunch] = useState('');
  const [testPreparationCourse, setTestPreparationCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the backend
    const formData = new FormData();
    formData.append('gender', gender);
    formData.append('raceEthnicity', raceEthnicity);
    formData.append('parentalEducation', parentalEducation);
    formData.append('lunch', lunch);
    formData.append('testPreparationCourse', testPreparationCourse);

    // For demonstration purposes only, replace this with your own API call
    fetch('http://localhost:3000/get_scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set content type to JSON
      },
      body: JSON.stringify({
        gender,
        raceEthnicity,
        parentalEducation,
        lunch,
        testPreparationCourse
      })
    });
  };

return (
    <div className="home container">
      <form onSubmit={handleSubmit}>
        <div className="home-contents container">
          <h3 className="details">Enter your Details</h3>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              className="input flex"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="raceEthnicity">Race/Ethnicity</label>
            <select
              className="input flex"
              id="raceEthnicity"
              value={raceEthnicity}
              onChange={(e) => setRaceEthnicity(e.target.value)}
              required
            >
              <option value="">Select Race/Ethnicity</option>
              <option value="group A">Group A</option>
              <option value="group B">Group B</option>
              <option value="group C">Group C</option>
              <option value="group D">Group D</option>
              <option value="group E">Group E</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="parentalEducation">Parental Education</label>
            <select
              className="input flex"
              id="parentalEducation"
              value={parentalEducation}
              onChange={(e) => setParentalEducation(e.target.value)}
              required
            >
              <option value="">Select Parental Education</option>
              <option value="some high school">Some High School</option>
              <option value="high school">High School</option>
              <option value="some college">Some College</option>
              <option value="associate's degree">Associate's Degree</option>
              <option value="bachelor's degree">Bachelor's Degree</option>
              <option value="master's degree">Master's Degree</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="lunch">Lunch</label>
            <select
              className="input flex"
              id="lunch"
              value={lunch}
              onChange={(e) => setLunch(e.target.value)}
              required
            >
              <option value="">Select Lunch</option>
              <option value="standard">Standard</option>
              <option value="free/reduced">Free/Reduced</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="testPreparationCourse">Test Preparation Course</label>
            <select
              className="input flex"
              id="testPreparationCourse"
              value={testPreparationCourse}
              onChange={(e) => setTestPreparationCourse(e.target.value)}
              required
            >
              <option value="">Select Test Preparation Course</option>
              <option value="none">None</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Continue to Predict 
          </button>
        </div> 
      </form>
    </div>
  );
};

export default Home;
