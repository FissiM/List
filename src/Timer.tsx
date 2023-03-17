import { useTimer } from "./utils/useTimer";

export const Timer = () => {
  const { laps, runing, handleClear, handleRuning } = useTimer();

  return (
    <>
      <h1>Time: {laps}</h1>
      <button onClick={handleRuning}>{}</button>
      <button onClick={handleClear}></button>
    </>
  );
};
