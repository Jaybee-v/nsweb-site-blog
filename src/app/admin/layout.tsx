"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Login } from "@/components/Admin/Auth/Login"
import { AdminMenu } from "@/components/Admin/AdminMenu"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const { data } = useSession()

    return (
        <div>
            {!data ? (
                <Login />
            ) : (
                <>
                    <AdminMenu />
                    <div className="ms-[200px]">{children}</div>
                </>
            )}
        </div>
    )
}
