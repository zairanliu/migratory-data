import { useState, useEffect } from "react";

const useIPAddress = () => {
  const [ip, setIP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) throw new Error("Failed to fetch IP");
        const data = await response.json();
        setIP(data.ip);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIP();
  }, []);

  return { ip, loading, error };
};

export default useIPAddress;
