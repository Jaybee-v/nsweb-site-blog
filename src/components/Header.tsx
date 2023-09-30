import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Header = () => {
    return (
        <header>
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/logo-wbg.png"
                        alt="logo"
                        width={300}
                        height={100}
                    />
                </Link>
                <ul className="flex w-[60%] justify-evenly">
                    <li className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold ">
                        <Link href="/#call-to-action">Accueil</Link>
                    </li>
                    <li className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold ">
                        <Link href="#presentation">Développeur Web</Link>
                    </li>
                    <li className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold ">
                        <Link href="#projects">Mes Projets</Link>
                    </li>
                    <li className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold ">
                        <Link href="/">Mon Blog</Link>
                    </li>
                    <li className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold ">
                        <Link href="#contact">Me Contacter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
