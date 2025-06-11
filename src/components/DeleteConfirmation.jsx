import { useEffect, useState } from "react";

const TIMER = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval set')
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      // Cleanup function to clear the timeout if the component dismounts
      console.log('Interval cleared');
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log('TIMER SET');
    const timer = setTimeout(() => {
      onConfirm(); 
    }, 5000);

    return () => {
      // Cleanup function to clear the timeout if the component dismounts
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
        <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
