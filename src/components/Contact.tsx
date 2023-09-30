"use client"
import React from "react"
import { z } from "zod"
import AutoForm, { AutoFormSubmit } from "./ui/auto-form"

const formSchema = z.object({
    name: z.string().describe("Nom de famille"),
    firstname: z.string().describe("Prénom"),
    email: z.string().describe("Adresse e-mail"),
    message: z.string().describe("Votre demande ici"),
})
export const Contact = () => {
    return (
        <section className="py-4" id="contact">
            <div className="px-4 lg:px-0 lg:w-96 mx-auto pb-8">
                <h2>Pour me contacter:</h2>
                <p>
                    Pour toute demande, remplissez le formulaire suivant. je
                    vous contacterai dans les plus brefs délais.
                </p>
            </div>
            <AutoForm
                className="px-4 lg:px-0 lg:w-96 mx-auto flex flex-col "
                formSchema={formSchema}
                fieldConfig={{
                    name: {
                        inputProps: {
                            placeholder: "Votre nom",
                        },
                    },
                    firstname: {
                        inputProps: {
                            placeholder: "Votre prénom",
                        },
                    },
                    email: {
                        inputProps: {
                            placeholder: "Votre adresse e-mail",
                        },
                    },
                    message: {
                        fieldType: "textarea",
                        inputProps: {
                            placeholder: "Votre message",
                        },
                    },
                }}
            >
                <AutoFormSubmit>Envoyer</AutoFormSubmit>
            </AutoForm>
        </section>
    )
}
