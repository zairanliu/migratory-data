import { useState, useEffect, useCallback } from 'react';

function useSharedState(channelName, initialState) {
  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    // Create a new channel for communication
    const channel = new BroadcastChannel(channelName);
    
    // Listen for updates from other windows
    const handleMessage = (event) => {
      setState(event.data);
    };
    
    channel.addEventListener('message', handleMessage);
    
    // Cleanup on unmount
    return () => {
      channel.removeEventListener('message', handleMessage);
      channel.close();
    };
  }, [channelName]);
  
  // Wrapper around setState that also broadcasts the change
  const setSharedState = useCallback((newValue) => {
    const channel = new BroadcastChannel(channelName);
    
    // Handle both direct values and updater functions
    const value = typeof newValue === 'function' 
      ? newValue(state)
      : newValue;
    
    setState(value);
    channel.postMessage(value);
    channel.close();
  }, [channelName, state]);
  
  return [state, setSharedState];
}

export default useSharedState;
