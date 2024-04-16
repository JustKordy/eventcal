import { useEffect, useState } from "react";
import "./App.css"

import OneEvent from "./OneEvent";
const ListEvents = () => {
  interface IEvent {
    id: number;
    name: string;
    date: string;
    desc: string;
  }

  const [events, setEvents] = useState<IEvent[]>([]);
  const [oneEvent, setOneEvent] = useState<IEvent | null>(null);

  useEffect(() => {
    if (localStorage.getItem("events") != null) {
      const stor = localStorage.getItem("events");
      if (stor) setEvents(JSON.parse(stor));
    }
  }, []);

  return (
    <>
     {
        oneEvent ? (
            <OneEvent {...oneEvent} />
        ) : (
            <div className="w-full h-full flex justify-center items-center flex-col gap-2">
            <div className="w-[30%] flex justify-center items-center flex-col">
             <div className="max-h-[500px] overflow-auto w-full">
             {
                events.map((event: IEvent) => (
                    <div onClick={() => setOneEvent(event)} className="w-full hover:border-indigo-700 border-2 cursor-pointer border-zinc-800 bg-zinc-800 p-2 rounded-lg flex justify-between items-center mb-2">
                        <div className="flex flex-col">
                        <span className="text-white font-bold ">{event.name}</span>
                        <span className="text-white">{event.date}</span>
                        </div>
                        <span className="text-white">{event.desc}</span>
                    </div>
                ) )
              }
             </div>
            </div>
          </div>
        )
     }
    </>
  );
};

export default ListEvents;
