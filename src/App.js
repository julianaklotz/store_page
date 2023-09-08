import React from "react";
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MenSection from './components/MenSection';

function App() {

  return (
    <div>
      <Navbar />
      <MenSection />
    </div>
  );
}

export default App;
