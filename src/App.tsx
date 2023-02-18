import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Intro from './pages/intro';
import Play from './pages/play';
import Game from './pages/game';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
