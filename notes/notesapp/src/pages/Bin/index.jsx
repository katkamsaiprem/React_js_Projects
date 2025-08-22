import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/sidebar"
import { useNote } from "../../context"
import { NoteCards } from "../../components/NotesCard"

export const Bin = () => {
    const {bin}=useNote();
    return (<>
        <Navbar />
        <main className="flex flex-col md:flex-row relative min-h-screen">
            <Sidebar />
            <div className="flex-1 w-full md:w-auto">


                <div className="mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4 md:px-6 lg:px-8">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                        {bin.map(({ title, text, id, isPinned }) => (
                            <NoteCards key={id} id={id} title={title} text={text} isPinned={isPinned} />

                        ))}
                    </div>
                </div>


            </div>
        </main>
    </>)
}