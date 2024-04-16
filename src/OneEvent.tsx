import React from "react";
import { IEvent } from "./EventForm";

const OneEvent = (event: IEvent) => {
  return (
   <div className="w-full flex justify-center items-center mt-10">
     <div className="w-[30%] flex justify-center items-center flex-col">
      <div className="max-h-[500px] overflow-auto w-full">
        <div className="w-full border-2 border-indigo-700 bg-zinc-800 p-2 rounded-lg flex justify-between items-center mb-2">
          <div className="flex flex-col">
            <span className="text-white font-bold">{event.name}</span>
            <span className="text-white">{event.date}</span>
          </div>
          <span className="text-white">{event.desc}</span>
        </div>
      </div>
    </div>
   </div>
  );
};
export default OneEvent;
