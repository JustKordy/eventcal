import {  useState } from "react";
import "./App.css";
import EventForm from "./EventForm";
import ListEvents from "./ListEvents";

function App() {
  const [currentReactCompoent, setCurrentReactComponent] = useState(<></>);

  return (
    <>
      <div className="w-screen h-screen bg-zinc-900 overflow-hidden">
        <div className="h-[80px] flex items-center w-full justify-center">
          <a
            onClick={() => setCurrentReactComponent(<EventForm />)}
            className="p-4 text-center bg-indigo-700 mr-4 hover:bg-indigo-800 transition-all text-white rounded-lg w-[300px]"
          >
            Vytvořit event
          </a>
          <a onClick={() => setCurrentReactComponent(<ListEvents/>)} className="p-4 bg-indigo-700 text-center hover:bg-indigo-800 transition-all text-white rounded-lg w-[300px]">
            Zobrazit eventy
          </a>
        </div>

        {currentReactCompoent}
      </div>
    </>
  );
}

export default App;
