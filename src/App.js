import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateFormateur from './Trainers/CreateFormateur';
import TrainerList from './Trainers/TrainerList';
import UpdateTrainer from './Trainers/UpdateTrainer';

function App() {
  return (
    <div className="App">
      <header className="container">
        <Routes>
          <Route path="/" element={<TrainerList />} />
          <Route path="/create-formateur" element={<CreateFormateur />} />
          <Route path="/update-trainer/:id" element={<UpdateTrainer />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
