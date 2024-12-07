import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Trainer.css';

const UpdateTrainer = () => {
  const [trainer, setTrainer] = useState({ id: '', name: '', emailAddress: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const storedTrainer = JSON.parse(localStorage.getItem(id));
    if (storedTrainer) {
      setTrainer(storedTrainer);
    }
  }, [id]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTrainer({ ...trainer, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(trainer.id, JSON.stringify(trainer));
    alert('Trainer updated successfully!');
    navigate('/');
  };

  return (
    <div className="trainer-form">
      <div className="heading">
        <p>Edit Trainer</p>
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

export default UpdateTrainer;
