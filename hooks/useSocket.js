import { useEffect } from "react";
import { socket } from "@/services/socket";

const useSocket = (onMessage) => {
  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      if (onMessage) {
        socket.on("message", onMessage);
      }
    }

    socket.on("connect", onConnect);

    return () => {
      socket.off("connect", onConnect);
    };
  }, []);

  return socket;
};

export default useSocket;
