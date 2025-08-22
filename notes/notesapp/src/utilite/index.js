export const findNoteInBin = (bin, id) => {
    return bin.some(note => note && note.id === id);
}

export const findNoteInArchive = (archive, id) => {
    return archive.some(note => note && note.id === id); 
}


const  NOTE_STORAGE_KEY="NOTES_KEYS"
const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    bin: [],
}

export const SaveToStorage=(state)=>{
    try{
       localStorage.setItem(NOTE_STORAGE_KEY,JSON.stringify( state));

    }
    catch(error){
        return console.log("not saved",error)
    }
}
export const LoadFromStorage=()=>{
    try{
        const savedNotes= localStorage.getItem(NOTE_STORAGE_KEY)
        return savedNotes? JSON.parse(savedNotes):initialState;

    }
    catch(error){
        return console.log(error,"unable to load data");
        
    }
}