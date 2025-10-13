
import axios from "axios";

const base_url = "https://api.wit.ai/message?v=20251010";

export const setAlarmByVoice = async (command, access_token, setAlarms) => {
  try {
    const response = await axios.get(`${base_url}&q=${command}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    const data = response.data.entities["wit$datetime:datetime"];
    const time = data[0].value; //here i will get time for e.g. "2025-10-11T08:00:00.000-07:00". That -7:00 actually issue karta hai when i convert into Date object by giving me 30 mins advance time i.e 8:30 instead of 8:00
    const actualTime = new Date(`${time}`.substring(0, time.lastIndexOf("-"))); //removing that 7:00 in order to fix it.
    const hour =
      actualTime.getHours() > 12
        ? actualTime.getHours() - 12
        : actualTime.getHours();
    const minute = actualTime.getMinutes();
    const am_pm = actualTime.getHours() > 12 ? "pm" : "am";

    setAlarms((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        time: `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`,
        label: am_pm,
        active: true,
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};
