import { useState, useEffect } from "react";
import { UAParser } from "ua-parser-js";

const useUserAgent = () => {
  const [userAgentInfo, setUserAgentInfo] = useState([]);

  useEffect(() => {
    const result = UAParser(navigator.userAgent);
    console.log(result);

    const info = [
      `Browser: ${result.browser.name} ${result.browser.version}`,
      `OS: ${result.os.name} ${result.os.version}`,
      `Device: ${result.device.vendor || "Unknown"} ${
        result.device.model || "Unknown"
      }`,
      `CPU: ${result.cpu.architecture || "Unknown"}`,
      `Engine: ${result.engine.name} ${result.engine.version}`,
    ];

    setUserAgentInfo(info);
  }, []);

  return userAgentInfo;
};

export default useUserAgent;
