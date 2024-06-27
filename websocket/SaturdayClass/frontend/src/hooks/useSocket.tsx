import { useEffect, useState } from "react"

export type WebSocketDeta = null | WebSocket;

export const useSocket = (setReceivedMessage: (message: string) => void) => {
  const [socket, setSocket] = useState<null | WebSocket>(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080')
    newSocket.onopen = () => {
      console.log("Connected to websocket")
    }

    newSocket.onmessage = (message: any) => {
      setReceivedMessage(message.data);
    }

    setSocket(newSocket)
    return () => newSocket.close();
  }, []);

  return socket;
}
