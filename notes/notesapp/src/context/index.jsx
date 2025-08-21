import { createContext, useContext, useReducer } from "react"
import { ReducerFunc } from "../reducers/reducerFunc";


const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],

}
const Notecontext = createContext()

const NoteContextProvider = ({ children }) => {
    const [{ title, text, notes, archive }, dispatch] = useReducer(ReducerFunc, initialState);
    return (<>

        <Notecontext.Provider value={{ title, text, notes, archive, dispatch }}>
            {children}
        </Notecontext.Provider>
    </>)
}

function useNote() {
    return useContext(Notecontext)
}

export { NoteContextProvider, useNote }