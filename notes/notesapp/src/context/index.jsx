import { createContext, useContext, useEffect, useReducer,useMemo } from "react"
import { ReducerFunc } from "../reducers/reducerFunc";
import { LoadFromStorage, SaveToStorage } from "../utilite";



const Notecontext = createContext()

const NoteContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReducerFunc, null, LoadFromStorage);

    useEffect(() => SaveToStorage(state), [state])

   const contextValue = useMemo(() => ({
    ...state,
    dispatch
}), [state]);


    const { title, text, notes, archive, bin } = contextValue

    return (
        <Notecontext.Provider value={{ title, text, notes, archive, bin, dispatch }}>
            {children}
        </Notecontext.Provider>
    )
}

function useNote() {
    return useContext(Notecontext)
}

export { NoteContextProvider, useNote }