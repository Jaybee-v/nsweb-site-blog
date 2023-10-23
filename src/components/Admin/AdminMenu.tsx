import { signOut } from "next-auth/react"
import Link from "next/link"
import React from "react"

export const AdminMenu = () => {
    return (
        <header className="fixed bg-gray-500 w-[200px] h-screen">
            <nav className="flex flex-col h-full justify-between">
                <div>
                    <p className="py-2 text-xl">L&apos;espace Admin</p>
                    <ul className="">
                        <li className="py-2 ms-3">
                            <Link
                                href="/admin"
                                className="text-lg tracking-wide"
                            >
                                Accueil
                            </Link>
                        </li>
                        <li className="py-2 ms-3">
                            <Link
                                href="/admin"
                                className="text-lg tracking-wide"
                            >
                                Les articles
                            </Link>
                        </li>
                        <li className="py-2 ms-3">
                            <Link
                                href="/admin/create-post"
                                className="text-lg tracking-wide"
                            >
                                Créer un article
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="py-2 text-xl border-t border-white">
                        Les accès au site
                    </p>
                    <ul>
                        <li className="py-2 ms-3">
                            <Link href="/" className="text-lg tracking-wide">
                                L&apos;accueil
                            </Link>
                        </li>
                        <li className="py-2 ms-3">
                            <Link
                                href="/blog"
                                className="text-lg tracking-wide"
                            >
                                Le blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div
                    className="py-2 cursor-pointer text-red-500 ms-1"
                    onClick={() => signOut()}
                >
                    Déconnexion
                </div>
            </nav>
        </header>
    )
}
