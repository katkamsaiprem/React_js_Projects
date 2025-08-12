import { ReducerFunc } from "../../reducers/reducerFunc";
import { useReducer } from "react";

export const NoteInput = () => {
 
  const initialState={

    title:"",
    text:"",
    notes:[],
  }
const [state,dispatch]=useReducer(ReducerFunc,initialState)

  const TitleHandler=(e)=>{
    dispatch({type: "Title",payload: e.target})

  }
  const TextHandler=(e)=>{
    dispatch({type: "Text",payload: e.target.value})
  }
  const NotesHandler=()=>{
    dispatch({type: "AddNote"})
    

  }
  console.log(state.notes) 
  return (
    <>
      <div className="flex flex-col absolute top-[10%] right-[40%] w-[20%] h-[10%] border rounded-sm border-gray-800">
        <input type="text" value={state.title} onChange={TitleHandler} placeholder="Enter Title"/>
        <textarea name="" value={state.text}  onChange={TextHandler} id="" placeholder="Enter Text"></textarea>
        <button onClick={NotesHandler} className="absolute bottom-0 right-0">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </>
  );
};

