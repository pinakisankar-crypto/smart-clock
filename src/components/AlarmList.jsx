import { useEffect, useRef, useState } from "react";
import alarm from "../assets/alarm.mp3";
import { CiTrash } from "react-icons/ci";
const AlarmList = ({ alarms, setAlarms }) => {
  const [visibility, setVisibility] = useState(false);

  const audio = useRef(new Audio(alarm))
  audio.current.loop = true;
  
  //function to stop alarm
  const stopAlarm = () =>{
    audio.current.pause()
    setVisibility(false)
  }

  // function to delete alarm
  const deleteAlarm = (id) =>{
    const updatedAlarms = alarms.filter((alarm) =>alarm.id !== id)
    setAlarms(updatedAlarms)
  }


  useEffect(() => {
    let lastTriggeredTime = ""; //used to stop the alarm music one time,cuz it was again and again ringing untill one minute passes even after stoppng it. So it will remember last seconds

    const interval = setInterval(() => {
      const now = new Date();
      const currentHour =
        now.getHours() > 12
          ? new Date().getHours() - 12  // -12 because to show 12 hr format
          : new Date().getHours();
      const currentMinute = now.getMinutes(); 

      alarms.forEach((alarm) => {
        const [alarmHour, alarmMinute] = alarm.time.split(":").map(Number);
        const am_pm = now.getHours() > 12 ? "pm" : "am";
        const alarmTime = `${alarmHour}:${alarmMinute}`;
        if (
          currentHour === alarmHour &&
          currentMinute === alarmMinute &&
          lastTriggeredTime !== alarmTime &&
          am_pm === alarm.label
        ) {
          audio.current.play();
          setVisibility(true)
          lastTriggeredTime = alarmTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [alarms]);

  return (
    <section className="mt-[10rem]">
      <h4 className="head-text text-[var(--primary-color)]">alarms</h4>

      {alarms?.map((alarm, id) => (
        <div key={id} className="py-2 px-1 bg-purple-100 mt-5 flex-between">
          <p className="text-4xl">
            {alarm.time} <span className="text-xl">{alarm.label}</span>
          </p>
          <p onClick={() => deleteAlarm(alarm.id)} className="text-red-500 text-xl cursor-pointer" ><CiTrash/></p>
        </div>

      ))}

      {visibility && (  //this is the stop layer which will get visible when the current time meets alarm time
        <div className={`alarm-stop-layer flex-box`}>
          <button onClick={stopAlarm} className="ring-4 ring-[#5a189a] w-60 h-60 rounded-full cursor-pointer">
            <p className="uppercase text-2xl font-semibold text-[#5a189a]">
              Stop
            </p>
          </button>
        </div>
      )}
    </section>
  );
};

export default AlarmList;
