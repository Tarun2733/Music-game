import { useParams } from "react-router-dom";

export default function Game() {
    const { roomCode } = useParams();

    return(
        <div>
            <h1>Game {roomCode}</h1>
        </div>
    )
}