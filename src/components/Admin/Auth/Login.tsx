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
        <div className="h-screen w-screen flex justify-center items-center">
            <section className="w-96 h-fit place-content-center  rounded-xl bg-gray-800 p-2">
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="p-4 flex flex-col items-center h-52 justify-evenly"
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
        </div>
    )
}
