import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar";
import { NoteInput } from "../../components/NoteInput";
import { NoteCards } from "../../components/NotesCard";
export const Home = () => {
  
  return (
    <>
      <Navbar/>
      <main className="flex relative">
        <Sidebar/>
        <NoteInput/>
        <NoteCards/>
        
      </main>
    </>
  )
}
