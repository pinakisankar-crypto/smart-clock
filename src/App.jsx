import Header from "./components/Header";
import AlarmCard from "./components/AlarmCard";


const App = () => {

  return (
    <div className="h-screen place-center bg-[var(--primary-color)] overflow-hidden">
      <Header/>
      <AlarmCard/>
    </div>
  );
};

export default App;
