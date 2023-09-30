import { signOut } from "next-auth/react"
import Link from "next/link"
import React from "react"

export const AdminMenu = () => {
    return (
        <header className="fixed bg-red-500 w-[200px] h-screen">
            <nav>
                <ul className="">
                    <li className="py-2 ms-3">
                        <Link href="/admin">Accueil</Link>
                    </li>
                    <li className="py-2 ms-3">
                        <Link href="/admin">Les articles</Link>
                    </li>
                    <li className="py-2 ms-3">
                        <Link href="/admin">Créer un article</Link>
                    </li>
                </ul>
                <p>Les accès au site</p>
                <ul>
                    <li>
                        <Link href="/">L&apos;accueil</Link>
                    </li>
                    <li>
                        <Link href="/blog">Le blog</Link>
                    </li>
                </ul>
                <div className="py-2 cursor-pointer" onClick={() => signOut()}>
                    Déconnexion
                </div>
            </nav>
        </header>
    )
}
