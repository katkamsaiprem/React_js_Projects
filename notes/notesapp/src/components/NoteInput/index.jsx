import { ReducerFunc } from "../../reducers/reducerFunc";
import { useReducer } from "react";

export const NoteInput = () => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
  };
  const [state, dispatch] = useReducer(ReducerFunc, initialState);

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
  console.log(state.notes);
  return (
    <>
      <div className="flex flex-col absolute top-[10%] right-[40%] w-[20%] h-[10%] border rounded-sm border-gray-800">
        <input
          type="text"
          value={state.title}
          onChange={TitleHandler}
          placeholder="Enter Title"
        />
        <textarea
          name=""
          value={state.text}
          onChange={TextHandler}
          id=""
          placeholder="Enter Text"
        ></textarea>
        <button
          disabled={state.title.length == 0}
          onClick={NotesHandler}
          className="absolute bottom-0 right-0"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
      <div className="mt-50 ml-20 flex flex-wrap gap-x-2 gap-y-0">
        {state.notes?.length > 0 &&
          state.notes.map(({ title, text, id }) => (
            <div key={id} className="w-60 h-[100px] border border-neutral-900 p-2 rounded-md">
              <div className="flex justify-between">
                <p>{title}</p>
                <button>
                  <span className="material-symbols-outlined">
                    bookmark
                  </span>
                </button>
              </div>
              <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                  <button>
                    <span className="material-symbols-outlined">archive</span>
                  </button>
                  <button >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
