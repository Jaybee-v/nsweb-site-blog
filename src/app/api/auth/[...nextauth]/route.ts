import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", placeholder: "Adresse e-mail" },
                password: {
                    label: "Mot de passe",
                    placeholder: "Mot de passe",
                },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password)
                    return null
                const user = admin.find(
                    (item) => item.email === credentials.email
                )
                if (user?.password === credentials.password) return user
                return null
            },
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
