import { useRef } from "react";
export interface IEvent{
  id: number,
  name: string,
  date: string, 
  desc: string
}

const EventForm = () => {


  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    // if (nameRef && nameRef.current && nameRef.current.value && dateRef && dateRef.current && dateRef.current.value && descRef && descRef.current && descRef.current.value) {
    //   console.log(nameRef.current.value);
    //   console.log(dateRef.current.value);
    //   console.log(descRef.current.value)
    // }
    if (nameRef && nameRef.current && nameRef.current.value && dateRef && dateRef.current && dateRef.current.value && descRef && descRef.current && descRef.current.value) {
    if(localStorage.getItem("events") != null){
      const stor =  localStorage.getItem("events");
      if(stor){

        const storObj = JSON.parse(stor);
        const lastId = storObj[storObj.length-1].id;
        const obj: IEvent = {
          id: lastId+1,
          name: nameRef.current.value,
          date: dateRef.current.value,
          desc: descRef.current.value
        }
        storObj.push(obj);
        localStorage.setItem("events", JSON.stringify(storObj));
      }
    } else{
      const obj: IEvent = {
        id: 1,
        name: nameRef.current.value,
        date: dateRef.current.value,
        desc: descRef.current.value
      }
      localStorage.setItem("events", JSON.stringify([obj]));
    }
  }

  };

  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col gap-2">
        
        <div className="w-[30%] flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center">
            <h2 className="text-white font-bold text-xl">Přidání eventu</h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="mt-3">
              <input
                ref={nameRef}
                type="text"
                placeholder="Název akce"
                className="border-2 border-zinc-800 focus:border-indigo-700 active:outline-none focus:outline-none hover:border-indigo-700 bg-zinc-800 transition-all rounded-md text-white w-[250px] h-[50px] p-3"
              />
            </div>
            <div className="mt-3">
              <input
                ref={dateRef}
                type="text"
                placeholder="Datum"
                className="border-2 border-zinc-800 focus:border-indigo-700 active:outline-none focus:outline-none hover:border-indigo-700 bg-zinc-800 transition-all rounded-md text-white w-[250px] h-[50px] p-3"
              />
            </div>
            <div className="mt-3">
              <textarea
                ref={descRef}
                placeholder="Popis"
                className="border-2 border-zinc-800 focus:border-indigo-700 active:outline-none focus:outline-none hover:border-indigo-700 bg-zinc-800 transition-all rounded-md text-white w-[250px] h-[150px] p-3"
              />
            </div>
            <div className="mt-3">
              <button
                onClick={handleSubmit}
                className="p-3 bg-indigo-700 hover:bg-indigo-800 transition-all text-white w-full rounded-lg"
              >
                Přidat event
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventForm;
