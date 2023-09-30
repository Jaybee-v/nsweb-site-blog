"use client"
import React, { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx"
import Image from "next/image"
import Link from "next/link"
export const HeaderNav = () => {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger onClick={() => setOpen(true)}>
                <RxHamburgerMenu size={30} className="me-2" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Image
                            src="/logo-wbg.png"
                            alt="logo"
                            width={300}
                            height={100}
                        />
                    </SheetTitle>
                    <SheetDescription>
                        <ul className="flex flex-col h-full justify-evenly">
                            <li
                                onClick={() => setOpen(false)}
                                className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold "
                            >
                                <Link href="/#call-to-action">Accueil</Link>
                            </li>
                            <li
                                onClick={() => setOpen(false)}
                                className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold "
                            >
                                <Link href="/#presentation">
                                    Développeur Web
                                </Link>
                            </li>
                            <li
                                onClick={() => setOpen(false)}
                                className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold "
                            >
                                <Link href="/#projects">Mes Projets</Link>
                            </li>
                            <li
                                onClick={() => setOpen(false)}
                                className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold "
                            >
                                <Link href="/blog">Mon Blog</Link>
                            </li>
                            <li
                                onClick={() => setOpen(false)}
                                className="py-4 px-2 hover:scale-105 transition text-gray-700 hover:text-red-700 hover:underline font-semibold "
                            >
                                <Link href="/#contact">Me Contacter</Link>
                            </li>
                        </ul>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
