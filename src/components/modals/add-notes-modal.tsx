"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

interface AddNoteModalProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export default function AddNoteModal({ isOpen, setIsOpen }: AddNoteModalProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically add the note to your state or database
        console.log("Adding note:", { title, description })
        setTitle("")
        setDescription("")
        setIsOpen(false)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <DialogHeader>
                                <DialogTitle className="text-warlocks-blue">Add New Note</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Note title"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Note description"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-warlocks-blue hover:bg-warlocks-blue/90">
                                    Add Note
                                </Button>
                            </form>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

