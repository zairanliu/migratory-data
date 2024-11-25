import { useEffect, useRef } from "react";

const useChannel = (onMessage, channelName = "default") => {
  const channelRef = useRef(null);

  useEffect(() => {
    const channel = new BroadcastChannel(channelName);
    channelRef.current = channel;

    if (onMessage) {
      channel.onmessage = (event) => {
        onMessage(event.data);
      };
    }

    return () => {
      channel.close();
    };
  }, [channelName]);

  return {
    send: (data) => {
      channelRef.current?.postMessage(data);
    },
    close: () => channelRef.current?.close(),
  };
};

export default useChannel;
