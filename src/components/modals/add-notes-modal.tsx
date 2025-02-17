"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UseGetOneNote } from "@/hooks/notes/get-one-note"
import { UseUpdateNote } from "@/hooks/notes/update-note"
import { UserCreateNote } from "@/hooks/notes/use-create-note"
import { ICreateNote } from "@/models/entities/note.entity"
import { createNoteSchema, CreateNoteSchema } from "@/schemas/notes/create-note.schema"
import { useModalStore } from "@/stores/modal.store"
import { zodResolver } from "@hookform/resolvers/zod"
import { getCookie } from "cookies-next"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

interface AddNoteModalProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export default function AddNoteModal({ isOpen, setIsOpen }: AddNoteModalProps) {
    const { modalType, setModalIsOpen } = useModalStore()
    const { noteId } = useModalStore() || ''
    const { mutate: mutateCreateNote } = UserCreateNote()
    const { mutate: mutateModifyNote } = UseUpdateNote(noteId)
    const form = useForm<CreateNoteSchema>({
        defaultValues: {
            title: "",
            content: ""
        },
        resolver: zodResolver(createNoteSchema)
    })

    const { data, isLoading } = UseGetOneNote(noteId)
    useEffect(() => {
        if (modalType === "edit" && data) {
            form.setValue("title", data.title)
            form.setValue("content", data.content)
        } else {
            form.setValue("title", "")
            form.setValue("content", "")
        }
    }, [data, modalType, form])


    const handleSubmit = (data: ICreateNote) => {
        if (modalType === "create") {
            const userId = getCookie('userId')?.toString()
            data.userId = userId
            mutateCreateNote(data)
            setModalIsOpen(false)
            form.reset()
        } else if (modalType === "edit") {
            mutateModifyNote(data)
            setModalIsOpen(false)
            form.reset()
        }
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
                                <DialogTitle className="text-warlocks-blue">
                                    {
                                        modalType === "edit" ? "Editar Nota" : "Adicionar Nota"
                                    }
                                </DialogTitle>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 mt-4">
                                    <div className="space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="title"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel htmlFor="title">Título</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            placeholder="Titulo da nota"
                                                            disabled={isLoading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <FormField
                                            control={form.control}
                                            name="content"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel htmlFor="description">Conteúdo</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            id="description"
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            placeholder="Conteúdo da nota"
                                                            disabled={isLoading}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-warlocks-blue hover:bg-warlocks-blue/90">
                                        {modalType === "edit" ? "Editar" : "Adicionar"}
                                    </Button>
                                </form>
                            </Form>
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    )
}

