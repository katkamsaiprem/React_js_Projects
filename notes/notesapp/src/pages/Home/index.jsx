import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/sidebar";
import { NoteInput } from "../../components/NoteInput";
import { NoteCards } from "../../components/NotesCard";
import { useNote } from "../../context";
export const Home = () => {
  const { notes } = useNote();
  const PinnedNotes = notes.filter(({ isPinned }) => isPinned)
  const OtherNotes = notes.filter(({ isPinned }) => !isPinned)

  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row relative min-h-screen">
        <Sidebar />
        <NoteInput />
        <div className="flex-1 w-full md:w-auto">
          <div className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-8">
            {/* Other Notes Section */}
            {OtherNotes?.length > 0 && (
              <div className="mt-32 sm:mt-36 md:mt-40">
                {PinnedNotes?.length > 0 && (
                  <h2 className="text-base sm:text-lg font-bold mb-4">Other Notes</h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {OtherNotes.map(({ title, text, id, isPinned }) => (
                    <NoteCards key={id} id={id} title={title} text={text} isPinned={isPinned} />
                  ))}
                </div>
              </div>
            )}{/* Pinned Notes Section */}
            {PinnedNotes?.length > 0 && (
              <div className={OtherNotes.length == 0 ? "mt-32 sm:mt-36 md:mt-40" : "mt-6 sm:mt-8"}>
                <h2 className="text-base sm:text-lg font-bold mb-4">Pinned Notes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {PinnedNotes.map(({ title, text, id, isPinned }) => (
                    <NoteCards key={id} id={id} title={title} text={text} isPinned={isPinned} />

                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </main>
    </>
  )
}
