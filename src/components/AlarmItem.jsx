import { useRef, useState } from "react";
import { IoMdAddCircle, IoMdCheckmark, IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

const AlarmItem = ({ setAlarms }) => {
  //SETTING UP THE USE STATE HOOKS

  const [initialHeight, setinitialHeight] = useState("h-[20%]");
  const [visibility, setVisibility] = useState("hidden");
  //initially setting the current time using Date object
  const [hourHand, setHourHand] = useState(new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()); //-12 because i want to show it in 12 hours format. e.g. instead of 13 it will give be 1 or instead of 16 it will give me 4.
  const [minuteHand, setMinuteHand] = useState(new Date().getMinutes());
  const [isAM, setIsAM] = useState(true);

  //SETTING UP THE USE REF HOOKS

  const navTextRef = useRef(null);

  //function to expand the height of the AlarmItem component
  const expandHeight = () => {
    setinitialHeight("h-[80%]");
    navTextRef.current.textContent = "set your alarm";
    setVisibility("block");
  };

  //function to minimize the height of the AlarmItem component
  const closeHeight = () => {
    setinitialHeight("h-[20%]");
    navTextRef.current.textContent = "alarm clock";
    setVisibility("hidden");
    //time will reset to their current time when press cancelled
    setMinuteHand(new Date().getMinutes());
    setHourHand(new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours());
  };

  //function to increment the hour
  const incrementHour = () => {
    setHourHand(hourHand + 1);
    if (hourHand === 12) {
      setHourHand(1);
    }
  };

  //function to decrement the hour
  const decrementHour = () => {
    setHourHand(hourHand - 1);
    if (hourHand === 1) {
      setHourHand(12);
    }
  };

  //function to increment the minute
  const incrementMinute = () => {
    setMinuteHand(minuteHand + 1);
    if (minuteHand === 59) {
      setMinuteHand(0);
    }
  };

  //function to decrement the minute
  const decrementMinute = () => {
    setMinuteHand(minuteHand - 1);
    if (minuteHand === 0) {
      setMinuteHand(59);
    }
  };

  const selectDay = () => {
    setIsAM(true);
  };

  const selectNight = () => {
    setIsAM(false);
  };

  //function to create time for the alarm
  const createAlarm = () => {
    setAlarms((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        time: `${hourHand.toString().padStart(2, "0")}:${minuteHand
          .toString()
          .padStart(2, "0")}`,
        label: isAM ?  "am" : "pm",
        active: true,
      },
    ]);

    toast.success(
      `Your alarm is set for ${hourHand
        .toString()
        .padStart(2, "0")}:${minuteHand.toString().padStart(2, "0")}`,
      { theme: "dark" }
    );

    closeHeight(); //calling the closing function so that the height and all the timing things will again reset
  };

  return (
    <section className={`alarm-item-body animated ${initialHeight}`}>
      <h3 ref={navTextRef} className="text-white head-text text-center">
        alarm clock
      </h3>

      {/* hour hand  */}
      <div
        className={`w-[90%] flex justify-between items-center mx-auto mt-12 ${visibility}`}
      >
        <button onClick={decrementHour} className="text-3xl btn">
          -
        </button>
        <p className="text-white text-6xl">
          {hourHand.toString().padStart(2, "0")}
        </p>
        <button onClick={incrementHour} className="btn text-3xl">
          +
        </button>
      </div>

      {/* minute hand  */}
      <div
        className={`w-[90%] flex justify-between items-center mx-auto mt-12 ${visibility}`}
      >
        <button onClick={decrementMinute} className="text-3xl btn">
          -
        </button>
        <p className="text-white text-6xl">
          {minuteHand.toString().padStart(2, "0")}
        </p>
        <button onClick={incrementMinute} className="btn text-3xl">
          +
        </button>
      </div>

      {/* setting am and pm  */}
      {visibility === "block" && (
        <div
          className={`border w-[90%] mx-auto mt-12 h-10 flex-between relative rounded-2xl`}
        >
          <span onClick={selectDay} className="w-[50%] left-0 block h-full place-center absolute z-10 cursor-pointer">
            AM
          </span>
          <span
            onClick={selectNight}
            className="w-[50%] right-0 block h-full place-center absolute z-10 cursor-pointer"
          >
            PM
          </span>
          <div
            className={`bg-[#caf0f8] w-[50%] absolute top-0 z-9 h-full rounded-2xl animated ${
              isAM ? "left-0" : "right-0"
            }`}
          ></div>
        </div>
      )}

      {/* action buttons  */}
      <div className="absolute w-[90%] -bottom-4 flex-box">
        <button onClick={closeHeight} className={`btn ${visibility}`}>
          <p className="text-2xl">
            <IoMdClose />
          </p>
        </button>
        {/* toggling this vise versa cuz i want "add button" to "visible" while others two "hidden" and "add button" to "hidden" while others two "visible"*/}
        <button
          onClick={expandHeight}
          className={`btn ${visibility === "hidden" ? "block" : "hidden"}`}
        >
          <p className="text-2xl">
            <IoMdAddCircle />
          </p>
        </button>
        <button onClick={createAlarm} className={`btn ${visibility}`}>
          <p className="text-2xl">
            <IoMdCheckmark />
          </p>
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AlarmItem;
