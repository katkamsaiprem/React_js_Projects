import {v4 as uuid} from 'uuid'

export const ReducerFunc=(state,{type,payload} )=>{
    switch(type) {
        case "Text":
            return {...state, text: payload}
        case "Title":
            return {...state, title: payload}
        case "AddNote":
            return {...state,notes:[...state.notes,{title:state.title,text:state.text,id:uuid()}]}//...state copies properties of original state obj and ...state.notes copies elements of original array
        default: 
            return state
    }

}