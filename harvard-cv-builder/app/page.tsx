"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      {!session ? (
        <>
          <h1 className="text-2xl font-bold">Belum Login</h1>
          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login with Google
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">
            Halo, {session.user?.name}
          </h1>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </>
      )}
    </main>
  )
}