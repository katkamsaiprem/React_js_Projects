import { useContext } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/sidebar"
import { useNote } from "../../context"

export const Archive = () => {

    const { archive } = useNote()
    return (<>
        <Navbar />
        <main className="flex relative">
            <Sidebar />

            <div className="flex flex-col">
                {/* Other Notes Section */}

                <div className="mt-10 ml-10">

                    <div className="flex flex-wrap gap-4">
                        {archive.map(({ title, text, id, isPinned }) => (
                            <div key={id} className="w-60 h-[100px] border border-neutral-900 p-2 rounded-md">
                                <div className="flex justify-between">
                                    <p>{title}</p>
                                   
                                </div>
                                <div className="flex flex-col ">
                                    <p >{text}</p>
                                    <div className="ml-42">
                                        <button onClick={() => ArchiveHandler({ id })}>
                                            <span className="material-icons">archive</span>
                                        </button>
                                        <button>
                                            <span className="material-icons">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </main>
    </>)
}