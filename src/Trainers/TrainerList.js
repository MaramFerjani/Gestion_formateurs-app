import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Trainer.css';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const storedTrainers = [];
    for (let i = 0; i < localStorage.length; i++) {
      const trainer = JSON.parse(localStorage.getItem(localStorage.key(i)));
      storedTrainers.push(trainer);
    }
    setTrainers(storedTrainers);
  }, []);

  const deleteTrainer = (id) => {
    localStorage.removeItem(id);
    setTrainers(trainers.filter(trainer => trainer.id !== id));
  };

  return (
    <div className="trainer-list">
      <h2>Formateurs List</h2>
      <Link to="/create-formateur" className="btn btn-primary">Add New Trainer</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map(trainer => (
            <tr key={trainer.id}>
              <td>{trainer.id}</td>
              <td>{trainer.name}</td>
              <td>{trainer.emailAddress}</td>
              <td>
                <Link to={`/update-trainer/${trainer.id}`} className="btn btn-secondary">Edit</Link>
                <button onClick={() => deleteTrainer(trainer.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerList;
