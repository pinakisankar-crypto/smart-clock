import { FaMicrophone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { setAlarmByVoice } from "../utils/witAI";

const VoiceCommand = ({ setAlarms }) => {

  const access_token = import.meta.env.VITE_WIT_ACCESS_TOKEN;


const captureVoice = () => {
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  let transcript = "";

  recognition.onstart = () => {
    toast.info("Listening...", { theme: "dark", autoClose: 5000 });
  };

  recognition.onresult = (event) => {
    transcript = event.results[0][0].transcript;
    toast.success("Voice input captured!", { theme: "dark" });
  };
  
  recognition.onerror = (event) => {
    toast.error(`Voice Recognition Error: ${event.error}`, { theme: "dark" });
  };
  
  recognition.onend = () => {
    setAlarmByVoice(transcript, access_token, setAlarms);
  };
  
  recognition.start();
};

  return (
    <div className="absolute cursor-pointer bottom-0 py-4 bg-zinc-300 w-full left-0 flex-box">
      <p onClick={captureVoice} className="text-2xl cursor-pointer">
        <FaMicrophone />
      </p>
    </div>
  );
};

export default VoiceCommand;
