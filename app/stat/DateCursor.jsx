"use client";

import { forwardRef, useState, useEffect } from "react";

const DateCursor = forwardRef((_, ref) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());

    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed z-50 bg-white border border-solid border-[#fe6c00] font-mono"
      ref={ref}
    >
      <p className="p-2 ">
        {date?.toLocaleDateString()}
        <br />
        {date?.toLocaleTimeString()}
      </p>
    </div>
  );
});

export default DateCursor;
