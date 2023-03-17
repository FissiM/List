import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [lapse, setLapse] = useState(0);
  const [running, setRuning] = useState(false);
  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleRuning = () => {
    if (running) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - lapse;

      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime);
      }, 0);
    }

    setRuning(!setRuning);
  };

  const handleClear = () => {
    clearInterval(intervalRef.current);
    setLapse(0);
    setRuning(false);
  };

  return;
  {
    lapse, running, handleRuning, handleClear;
  }
};
