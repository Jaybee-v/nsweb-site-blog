import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Footer = () => {
    return (
        <footer className="border-t border-gray-400 py-4 md:grid md:grid-cols-3 bg-white">
            <div className="flex flex-col md:flex-row items-center col-span-1">
                <Image
                    src="/logo-wbg.png"
                    alt="logo"
                    width={200}
                    height={100}
                />
                <div className="flex justify-center">j-b.vrain@outlook.fr</div>
            </div>
            <div className="hidden md:flex flex-col items-center col-span-2 mt-4">
                <h4 className="text-red text-lg font-semibold uppercase">
                    Se déplacer sur le site
                </h4>
                <ul className="flex w-[60%] justify-evenly">
                    <li>
                        <Link href="/#call-to-action">Accueil</Link>
                    </li>
                    <li>
                        <Link href="#presentation">Développeur Web</Link>
                    </li>
                    <li>
                        <Link href="#projects">Mes Projets</Link>
                    </li>
                    <li>
                        <Link href="/">Mon Blog</Link>
                    </li>
                    <li>
                        <Link href="/">Me Contacter</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
