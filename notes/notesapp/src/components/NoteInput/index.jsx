
import { useNote } from "../../context";

export const NoteInput = () => {
  const { title, text,  dispatch} = useNote()

  const TitleHandler = (e) => {
    dispatch({ type: "Title", payload: e.target.value });
  };
  const TextHandler = (e) => {
    dispatch({ type: "Text", payload: e.target.value });
  };
  const NotesHandler = () => {
    dispatch({ type: "AddNote" });
    dispatch({ type: "RemoveInput" });
  };
  
 

   

  return (
    <>
      <div className="flex flex-col absolute top-[5%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-auto min-h-[120px] border rounded-sm border-gray-800 bg-white shadow-lg z-10">
        <input
          type="text"
          value={title}
          onChange={TitleHandler}
          placeholder=" Enter Title"
          className="focus:outline-none p-2 text-sm sm:text-base"
        />
        <textarea
          name=""
          value={text}
          onChange={TextHandler}
          id=""
          placeholder=" Enter Text"
          className="focus:outline-none p-2 resize-none min-h-[60px] text-sm sm:text-base"
        ></textarea>
        <button
          disabled={title.length === 0}
          onClick={NotesHandler}
          className="absolute bottom-2 right-2 p-1 hover:bg-gray-100 rounded"
        >
          <span className="material-icons text-lg sm:text-xl">add</span>
        </button>
      </div>
      

     
    </>

  );
};
