"use client"
import "./globals.css"
import { Footer } from "@/components/Footer"
import AuthProvider from "@/components/Admin/Auth/AuthProvider"
import { usePathname } from "next/navigation"
import { Header } from "@/components/Header"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const path = usePathname()
    return (
        <html lang="fr">
            <body>
                {path.startsWith("/admin") ? null : <Header />}

                <AuthProvider>{children}</AuthProvider>
                {path.startsWith("/admin") ? null : <Footer />}
            </body>
        </html>
    )
}
