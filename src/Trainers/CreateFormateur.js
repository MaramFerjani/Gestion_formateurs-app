import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Trainer.css';

const CreateFormateur = () => {
  const [trainer, setTrainer] = useState({
    id: '',
    name: '',
    emailAddress: ''
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTrainer = { ...trainer, id: Date.now() }; 
    localStorage.setItem(newTrainer.id, JSON.stringify(newTrainer));
    alert('Trainer added successfully!');
    navigate('/');
  };

  return (
    <div className="trainer-form">
      <div className="heading">
        <p>Formateurs Form</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={trainer.id}
            onChange={handleInput}
            disabled
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={trainer.name}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="emailAddress"
            name="emailAddress"
            value={trainer.emailAddress}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CreateFormateur;
