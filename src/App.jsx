import React from 'react'
import HomeScreen from './screens/HomeScreen';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GameScreen from './screens/GameScreen';
import Investigation from './screens/Investigation';
import Grid from './screens/Grid';
import LeaderBorad from './screens/LeaderBorad';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/GameScreen" element={<GameScreen/>} /> 
        <Route path="/investigate" element={<Investigation/>} />
        <Route path="/grid" element={<Grid/>} />
        <Route path="/leader" element={<LeaderBorad/>} />
      </Routes>
    </Router>
  )
}

export default App
