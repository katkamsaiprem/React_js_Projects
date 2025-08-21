import { useNote } from "../../context"

export const NoteCards = () => {

    const { notes, dispatch } = useNote();

    const PinHandler = ({ id, isPinned }) => {
        dispatch({ type: "Pin", payload: { id, isPinned } })

    }
    const ArchiveHandler = ({ id }) => {
        dispatch({ type: "Archive", payload: { id } })


    }


    const PinnedNotes = notes.filter(({ isPinned }) => isPinned)
    const OtherNotes = notes.filter(({ isPinned }) => !isPinned)
    return (<>
        <div className="flex fex-row">
            <div className="flex flex-col">
                {/* Other Notes Section */}
                {OtherNotes?.length > 0 && (
                    <div className="mt-40 ml-4">
                        {PinnedNotes?.length > 0 && (
                            <h2 className="text-lg font-bold mb-4">Other Notes</h2>
                        )}
                        <div className="flex flex-wrap gap-4">
                            {OtherNotes.map(({ title, text, id, isPinned }) => (
                                <div key={id} className="w-60 h-[100px] border border-neutral-900 p-2 rounded-md">
                                    <div className="flex justify-between">
                                        <p>{title}</p>
                                        <button onClick={() => PinHandler({ id, isPinned })}>
                                            <span className={isPinned ? `material-icons` : `material-icons-outlined`}>
                                                push_pin
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col ">
                                        <p >{text}</p>
                                        <div className="ml-42">
                                            <button onClick={() => ArchiveHandler({ id })}>
                                                <span class="material-icons-outlined">
                                                    archive
                                                </span>
                                            </button>
                                            <button>
                                                <span class="material-icons-outlined">
                                                    delete_outline
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}{/* Pinned Notes Section */}
                {PinnedNotes?.length > 0 && (
                    <div className={OtherNotes.length == 0 ? "mt-30 ml-4" : "mt-3 ml-4"}>
                        <h2 className="text-lg font-bold mb-4">Pinned Notes</h2>
                        <div className="flex flex-wrap gap-4">
                            {PinnedNotes.map(({ title, text, id, isPinned }) => (
                                <div key={id} className="w-60 h-[100px] border border-neutral-900 p-2 rounded-md">
                                    <div className="flex justify-between">
                                        <p>{title}</p>
                                        <button onClick={() => PinHandler({ id, isPinned })}>
                                            <span className={isPinned ? `material-icons` : `material-icons-outlined`}>
                                                push_pin
                                            </span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col ">
                                        <p>{text}</p>
                                        <div className="ml-42 ">
                                            <button>
                                                <span class="material-icons-outlined">
                                                    archive
                                                </span>
                                            </button>
                                            <button>
                                                <span class="material-icons-outlined">
                                                    delete_outline
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div></>)

}