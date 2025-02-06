import { useState } from 'react'
import './App.css'
import JoinRoom from './JoinRoom'
import CreateRoom from './CreateRoom'

function App() {
  const [showTextJoin,setShowTextJoin] = useState(false)
  const [showTextCreate,setShowTextCreate] = useState(false)

  

  return (
    <div className="App">
      <h1>Welcome to Music Game</h1>
      <button onClick={() => setShowTextJoin(!showTextJoin)}>Join Room</button>
      <button onClick={() => setShowTextCreate(!showTextCreate) }>Create Room</button>
      {showTextJoin && <JoinRoom />}
      {showTextCreate && <CreateRoom />}
    </div>
  )
}

export default App
