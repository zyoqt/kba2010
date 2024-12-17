import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Posts from './screens/Posts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
