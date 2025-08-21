import { ReducerFunc } from "../../reducers/reducerFunc";
import { useReducer } from "react";
import { useNote } from "../../context";


export const NoteInput = () => {
  const { title, text,  dispatch,archive } = useNote()

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
      <div className="flex flex-col absolute top-[10%] right-[40%] w-[20%] h-[10%] border rounded-sm border-gray-800">
        <input
          type="text"
          value={title}
          onChange={TitleHandler}
          placeholder=" Enter Title"
          className="focus:outline-none"
        />
        <textarea
          name=""
          value={text}
          onChange={TextHandler}
          id=""
          placeholder=" Enter Text"
          className="focus:outline-none"
        ></textarea>
        <button
          disabled={title.length === 0}
          onClick={NotesHandler}
          className="absolute bottom-0 right-0"
        >
          <span className="material-icons">add</span>
        </button>
      </div>
      

     
    </>

  );
};
