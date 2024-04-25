import { useState } from 'react'
import './App.css'
import { useSocket } from './hooks/useSocket';

function App() {
  const [message, setMessage] = useState<string>("");
  const [receivedMessage, setReceivedMessage] = useState<string>('');
  const socket = useSocket(setReceivedMessage);

  return (
    <>
      <div>
        <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='chat...' />
        <button onClick={() => socket.send(message)}>Send</button>
      </div>
      {receivedMessage}
    </>
  )
}

export default App
