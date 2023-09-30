'use client'
import { useSession } from "next-auth/react"
import React from "react"

export default function Admin() {
    const { data } = useSession()
    return <div>{JSON.stringify(data)}</div>
}
