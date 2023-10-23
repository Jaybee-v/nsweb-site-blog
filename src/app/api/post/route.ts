import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const json = await req.json()
        const post = await prisma.post.create({
            data: {
                title: json.title,
                catchPhrase: json.catchPhrase,
                content: json.content,
            },
        })
        if (post) {
            return new NextResponse(
                JSON.stringify({ message: "Nouvel article ajouté !" }),
                {
                    status: 201,
                    headers: { "Content-Type": "application/json" },
                }
            )
        }
    } catch (error: any) {
        console.log(error)

        return new NextResponse(error.message, { status: 500 })
    }
}
