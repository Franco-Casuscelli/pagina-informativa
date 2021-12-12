import React from 'react';
import { Switch, Router } from 'react-router-dom';
import Home from './components/Home';
import './style.css';

export default function App() {
  return (
    <div className="container-fluid">
      <Home />
    </div>
  );
}
