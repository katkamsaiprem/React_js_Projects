import { v4 as uuid } from 'uuid'


export const ReducerFunc = (state, { type, payload }) => {
    switch (type) {
        case "Text":
            return { ...state, text: payload }
        case "Title":
            return { ...state, title: payload }
        case "AddNote":
            return { ...state, notes: [...state.notes, { title: state.title, text: state.text, id: uuid(), isPinned: false }] }
        case "RemoveInput":
            return { ...state, title: "", text: "" }
        case "Pin":
            return { ...state, notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note) }
        case "Add_Archive":

            const noteToArchive = state.notes.find(({ id }) => id === payload.id);

            return {
                ...state,
                archive: [...state.archive, noteToArchive],
                notes: state.notes.filter(note => note.id !== payload.id)

            }
        case "Remove_Archive":
            return {

                ...state,
                notes: [...state.notes, state.archive.find(note => note.id === payload.id)],
                archive: state.archive.filter(note => note.id !== payload.id)
            }
        case "Add_Bin":
            const noteToBin= state.notes.find(({ id }) => id === payload.id);
            return {
                  ...state,
                bin: [...state.bin, noteToBin],
                notes: state.notes.filter(note => note.id !== payload.id)
            }
        case "Remove_Bin":
            return {
                ...state,
                notes: [...state.notes, state.bin.find(note => note.id === payload.id)],
                bin: state.bin.filter(note => note.id !== payload.id)

            }
        case "PermanentDelete":
            return {
                ...state,
                bin: state.bin.filter(note=>note.id!==payload.id)

            } 
        case "Add_Bin_From_Archive":
            return {
                ...state,
                bin:[...state.bin,state.archive.find(note=>note.id===payload.id)],
                archive: state.archive.filter(note=>note.id!==payload.id)

            }
        default:
            return state
    }

}