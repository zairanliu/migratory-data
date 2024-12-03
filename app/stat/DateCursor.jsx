import { forwardRef, useState, useEffect } from "react";

const DateCursor = forwardRef((_, ref) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const time = date.toLocaleTimeString();

  return (
    <div
      className="fixed z-50 bg-white border border-solid border-[#fe6c00] font-mono"
      ref={ref}
    >
      <p className="p-2 ">
        {date.toLocaleDateString()}
        <br />
        {time}
      </p>
    </div>
  );
});

export default DateCursor;
