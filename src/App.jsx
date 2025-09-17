import React from 'react'
import HomeScreen from './screens/HomeScreen';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GameScreen from './screens/GameScreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/GameScreen" element={<GameScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App
