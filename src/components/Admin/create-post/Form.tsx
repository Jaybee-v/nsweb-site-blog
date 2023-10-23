"use client"
import React from "react"
import { z } from "zod"
import AutoForm, { AutoFormSubmit } from "../../ui/auto-form"
import { Post } from "@/models/Post"

const formSchema = z.object({
    title: z.string().describe("Titre de l'article"),
    catchPhrase: z.string().describe("Phrase d'accroche"),
    content: z.string().describe("Votre article"),
})

export const Form = () => {
    const handleSubmit = async (v: Post) => {
        console.log(v.title)
        const post = {
            title: v.title,
            catchPhrase: v.catchPhrase,
            content: v.content,
        }
        const res = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log(res)
    }
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <AutoForm
                className="w-[50%] mx-auto bg-gray-500 p-4 rounded-lg"
                onSubmit={(v: any) => handleSubmit(v)}
                formSchema={formSchema}
                fieldConfig={{
                    title: {
                        inputProps: {
                            placeholder: "Titre de l'article",
                        },
                    },
                    catchPhrase: {
                        inputProps: {
                            placeholder: "Phrase d'accroche",
                        },
                    },
                    content: {
                        fieldType: "textarea",
                        inputProps: {
                            placeholder: "Votre article",
                        },
                    },
                }}
            >
                <AutoFormSubmit>Enregistrer</AutoFormSubmit>
            </AutoForm>
        </div>
    )
}
