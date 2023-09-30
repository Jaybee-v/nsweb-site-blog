"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const credentials = {
            email: email,
            password: password,
        }
        await signIn("credentials", credentials)
    }

    return (
        <section>
            <form
                action=""
                onSubmit={handleSubmit}
                className="p-4 flex flex-col items-center h-44 justify-evenly"
            >
                <Input
                    placeholder="Adresse e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="uppercase">connexion</Button>
            </form>
        </section>
    )
}
