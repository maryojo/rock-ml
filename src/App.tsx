import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Intro from './pages/intro';
import Play from './pages/play';
import Game from './pages/game';
import Test from './pages/test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<Game />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
