"use client"

import NotesList from "@/components/lists/notes-list"
import AddNoteModal from "@/components/modals/add-notes-modal"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LogOut, PlusCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NotesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
            >
                <div className="p-6 flex justify-between items-center border-b border-warlocks-blue/20">
                    <h1 className="text-2xl font-bold text-warlocks-blue">My Notes</h1>
                    <div className="flex space-x-2">
                        <Button onClick={() => setIsModalOpen(true)} className="bg-warlocks-blue hover:bg-warlocks-blue/90">
                            <PlusCircle className="mr-2 h-4 w-4" /> Add Note
                        </Button>
                        <Link href="/auth">
                            <Button variant="outline" className="border-warlocks-blue text-warlocks-blue hover:bg-warlocks-blue/10">
                                <LogOut className="mr-2 h-4 w-4" /> Logout
                            </Button>
                        </Link>
                    </div>
                </div>
                <NotesList />
            </motion.div>
            <AddNoteModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
    )
}

