import { useState } from 'react'
import './App.css'
import JoinRoom from './JoinRoom'
import CreateRoom from './CreateRoom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from './Game'

function App() {
  const [showTextJoin,setShowTextJoin] = useState(false)
  const [showTextCreate,setShowTextCreate] = useState(false)

  

  return (
    <Router>
    <div className="App">
      <h1>Welcome to Music Game</h1>
      <button onClick={() => setShowTextJoin(!showTextJoin)}>Join Room</button>
      <button onClick={() => setShowTextCreate(!showTextCreate) }>Create Room</button>
      {showTextJoin && <JoinRoom />}
      {showTextCreate && <CreateRoom />}

      <Routes>
      <Route path="/game/:roomCode" element={<Game />} /> 
      </Routes>
    </div>
    </Router>
  )
}

export default App
