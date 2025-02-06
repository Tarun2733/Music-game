import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function JoinRoom() {
    const [roomCode, setRoomCode] = useState("")
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleJoinRoom = () => {
        if (!roomCode) {
          setMessage("Please enter a room code.");
          return;
        }
    
        axios.post("http://localhost:8000/api/join-room/", { room_code: roomCode })
          .then((response) => {
            navigate(`/game/${roomCode}`);
          })
          .catch((error) => {
            setMessage(error.response?.data?.error || "Error joining the room.");
          });
    };
    
    return (
        <div>
        <input type="text" placeholder="Enter Room ID"  value={roomCode} onChange={(e)=>{
            setRoomCode(e.target.value)
        }}/>
        <button onClick={handleJoinRoom}>Join Room</button>
        {message && <p>{message}</p>}
        </div>
    )
}