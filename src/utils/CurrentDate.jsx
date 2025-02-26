import { useEffect, useState } from "react";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000); // Updates every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return <p>{currentDate}</p>;
};

export default CurrentDate;
