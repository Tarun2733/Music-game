import { useState } from 'react';

export default function CreateRoom() {
  const [players, setPlayers] = useState(1);  // Default to 1 player
  const [time, setTime] = useState(10);        // Default to 10 seconds

  const handlePlayerChange = (event) => {
    setPlayers(Number(event.target.value));
  };

  const handleTimeChange = (event) => {
    setTime(Number(event.target.value));
  };

  return (
    <div>
      <input type="text" placeholder="Enter Name of the Room" />
      <input type="text" placeholder="Enter Owner Name" />
      
      <div>
        <p>Select Number of Players:</p>
        <label>
          <input type="radio" value="1" checked={players === 1} onChange={handlePlayerChange} /> 1
        </label>
        <label>
          <input type="radio" value="2" checked={players === 2} onChange={handlePlayerChange} /> 2
        </label>
        <label>
          <input type="radio" value="3" checked={players === 3} onChange={handlePlayerChange} /> 3
        </label>
        <label>
          <input type="radio" value="4" checked={players === 4} onChange={handlePlayerChange} /> 4
        </label>
      </div>

      <div>
        <p>Select Guess Time (in seconds):</p>
        <label>
          <input type="radio" value="1" checked={time === 1} onChange={handleTimeChange} /> 1 sec
        </label>
        <label>
          <input type="radio" value="10" checked={time === 10} onChange={handleTimeChange} /> 10 sec
        </label>
        <label>
          <input type="radio" value="20" checked={time === 20} onChange={handleTimeChange} /> 20 sec
        </label>
        <label>
          <input type="radio" value="30" checked={time === 30} onChange={handleTimeChange} /> 30 sec
        </label>
      </div>

      <p>Room Code: <strong>12345</strong></p> {/* This will later be fetched from backend */}
      <button>Create Room</button>
    </div>
  );
}
