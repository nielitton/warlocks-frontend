"use client"

import NotesList from "@/components/lists/notes-list"
import AddNoteModal from "@/components/modals/add-notes-modal"
import { Button } from "@/components/ui/button"
import { UseLogout } from "@/hooks/auth/use-logout"
import { useModalStore } from "@/stores/modal.store"
import { motion } from "framer-motion"
import { LogOut, PlusCircle } from "lucide-react"
import Link from "next/link"

export default function NotesPage() {
    const { modalIsOpen, setModalIsOpen, setModalType } = useModalStore()
    const { logout } = UseLogout()

    const handleLogout = () => {
        logout()
    }

    const handleModal = () => {
        setModalType("create")
        setModalIsOpen(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
            >
                <div className="p-6 flex justify-between items-center border-b border-warlocks-blue/20">
                    <h1 className="text-2xl font-bold text-warlocks-blue">Minhas notas</h1>
                    <div className="flex space-x-2">
                        <Button onClick={() => handleModal()} className="bg-warlocks-blue hover:bg-warlocks-blue/90">
                            <PlusCircle className="mr-2 h-4 w-4" /> Adicionar nota
                        </Button>
                        <Link href="/auth">
                            <Button onClick={() => handleLogout()} variant="outline" className="border-warlocks-blue text-warlocks-blue hover:bg-warlocks-blue/10">
                                <LogOut className="mr-2 h-4 w-4" /> Sair
                            </Button>
                        </Link>
                    </div>
                </div>
                <NotesList />
            </motion.div>
            <AddNoteModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
        </div>
    )
}

