// AlarmCard.jsx
import { useState, useEffect } from "react";
import AlarmItem from "./AlarmItem";
import AlarmList from "./AlarmList";
import VoiceCommand from "./VoiceCommand";

const AlarmCard = () => {
  const [alarms, setAlarms] = useState(
    JSON.parse(localStorage.getItem("alarms")) || []
  );

  useEffect(() => {
    localStorage.setItem("alarms", JSON.stringify(alarms));
  }, [alarms]);

  return (
    <main className="clock-card">
      <AlarmItem setAlarms={setAlarms} />
      <AlarmList alarms={alarms} setAlarms = {setAlarms} />
      <VoiceCommand setAlarms={setAlarms}/>
    </main>
  );
};

export default AlarmCard;