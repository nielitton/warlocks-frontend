"use client"

import { Button } from "@/components/ui/button"
import { UseDeleteNote } from "@/hooks/notes/use-delete-note"
import { UseGetNotes } from "@/hooks/notes/use-get-notes"
import { useListPageStore } from "@/stores/list-pages-store"
import { useModalStore } from "@/stores/modal.store"
import { useNoteStore } from "@/stores/notes-store"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Pen, Trash2 } from "lucide-react"
import { useEffect } from "react"
import { Skeleton } from "../ui/skeleton"

export default function NotesList() {
    const { notes, setNotes } = useNoteStore()
    const { setModalIsOpen, setModalType, setNoteId } = useModalStore()
    const { currentPage, nextPage, prevPage, setTotalPages, totalPages } = useListPageStore()

    const { data: notesFinded, refetch: refetchNotes, isLoading } = UseGetNotes(currentPage)
    const { mutate: deleteNoteMutate } = UseDeleteNote()

    useEffect(() => {
        if (notesFinded) {
            setNotes(notesFinded.notes || []);
            setTotalPages(Number(notesFinded.totalPages));
        }
    }, [notesFinded, setNotes, setTotalPages]);

    const deleteNote = (id: string) => {
        deleteNoteMutate(id, {
            onSuccess: () => {

                if (notes.length === 1 && currentPage > 1) {
                    prevPage();
                }

                refetchNotes();
            },
        })
        refetchNotes()
    }

    const handleEditModal = (id: string) => {
        setModalIsOpen(true)
        setNoteId(id)
        setModalType("edit")
    }

    return (
        <div className="p-6">
            <AnimatePresence>
                {
                    isLoading ?
                        <div className="p-6 space-y-4">
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                        </div>
                        :
                        <div>
                            {notes?.map((note) => (
                                <motion.div
                                    key={note.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-gray-100 p-4 rounded-lg space-y-2 mb-4 border-l-4 border-warlocks-blue"
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold text-warlocks-blue">{note.title}</h3>
                                        <div className="flex">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleEditModal(note.id)}
                                                className="text-warlocks-blue hover:bg-warlocks-blue/10 flex"
                                            >
                                                <Pen className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => deleteNote(note.id)}
                                                className="text-red-600 hover:bg-warlocks-blue/10"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{note.content}</p>
                                </motion.div>
                            ))}
                        </div>
                }
            </AnimatePresence>
            {notesFinded?.totalRecords === 0 && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500 mt-4">
                    Não existem notas, clique em adicionar, para criar uma.
                </motion.p>
            )}
            {notes.length > 0 && (
                <div className="flex justify-between items-center mt-6">
                    <Button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        variant="outline"
                        className="text-warlocks-blue border-warlocks-blue"
                    >
                        <ChevronLeft className="h-4 w-4 mr-2" /> Previous
                    </Button>
                    <span className="text-warlocks-blue font-medium">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        className="text-warlocks-blue border-warlocks-blue"
                    >
                        Next <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            )}
        </div>
    )
}

