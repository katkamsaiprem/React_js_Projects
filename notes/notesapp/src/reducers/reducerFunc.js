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
        case "Archive":
           
            const noteToArchive = state.notes.find(({id}) => id === payload.id);
            
            return { 
                ...state, 
                archive: [...state.archive, noteToArchive],
                notes: state.notes.filter(note => note.id !== payload.id) 
            }
        default:
            return state
    }

}