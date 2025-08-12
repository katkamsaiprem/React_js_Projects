import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar";
import { NoteInput } from "../../components/NoteInput";

export const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="flex relative">
        <Sidebar/>
        <NoteInput/>
      </main>
    </>
  )
}
