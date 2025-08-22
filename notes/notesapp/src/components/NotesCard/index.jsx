import { useNote } from "../../context"
import { findNoteInArchive, findNoteInBin } from "../../utilite";

export const NoteCards = ({ id, title, text, isPinned }) => {
    const { dispatch, archive, bin } = useNote()

    const PinHandler = ({ id, isPinned }) => {
        dispatch({ type: "Pin", payload: { id, isPinned } })

    }
    const ArchiveHandler = ({ id }) => {
        !isNoteInArchive ?
            dispatch({ type: "Add_Archive", payload: { id } }) :
            dispatch({ type: "Remove_Archive", payload: { id } })


    }
    const BinHandler = ({ id }) => {
        isNoteInArchive ? dispatch({ type: "Add_Bin_From_Archive", payload: { id } }) : dispatch({ type: "Add_Bin", payload: { id } })



    }

    const RestoreHandler = ({ id }) => {
        dispatch({ type: "Remove_Bin", payload: { id } })

    }
    const PermanentDeleteHandler = ({ id }) => {
        dispatch({ type: "PermanentDelete", payload: { id } })
    }
    const isNoteInArchive = findNoteInArchive(archive, id);
    const isNoteInBin = findNoteInBin(bin, id);



    return (<>
        <div key={id} className="w-full sm:w-72 md:w-60 lg:w-64 xl:w-60 h-auto min-h-[120px] border border-neutral-900 p-2 sm:p-3 rounded-md bg-white hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-sm sm:text-base truncate flex-1 mr-2">{title}</p>
                {!isNoteInArchive && !isNoteInBin && <button onClick={() => PinHandler({ id, isPinned })} className="flex-shrink-0 p-1 hover:bg-gray-100 rounded">
                    <span className={`${isPinned ? `material-icons` : `material-icons-outlined`} text-sm sm:text-base`}>
                        push_pin
                    </span>
                </button>}

            </div>
            <div className="flex flex-col">
                <p className="text-xs sm:text-sm text-gray-700 mb-3 line-clamp-3 overflow-hidden">{text}</p>
                <div className="flex justify-end gap-1">
                    {!isNoteInBin && (<><button onClick={() => ArchiveHandler({ id })} className="p-1 hover:bg-gray-100 rounded">
                        <span className={`${isNoteInArchive ? `material-icons` : `material-icons-outlined`} text-sm sm:text-base`}>
                            archive
                        </span>
                    </button>

                        <button onClick={() => BinHandler({ id })} className="p-1 hover:bg-gray-100 rounded">
                            <span className="material-icons-outlined text-sm sm:text-base">
                                delete_outline
                            </span>
                        </button></>)}
                    {isNoteInBin && (
                        <>
                            <button onClick={() => RestoreHandler({ id })} className="p-1 hover:bg-gray-100 rounded">
                                <span className="material-icons-outlined text-sm sm:text-base">restore_from_trash</span>
                            </button>
                            <button onClick={() => PermanentDeleteHandler({ id })} className="p-1 hover:bg-gray-100 rounded">
                                <span className="material-icons-outlined text-sm sm:text-base">delete_forever</span>
                            </button>
                        </>
                    )}


                </div>
            </div>
        </div></>)

}