'use client'

import { useUser, UserButton, SignInButton } from "@clerk/nextjs"
import { useQuery } from "convex/react"
import { api } from "../convex/_generated/api"
import { PricingTable } from "@clerk/nextjs"
import ProductCarousel from "../components/ProductCarousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return null

  return (
    <main className="min-h-screen bg-[#f8f5f2] flex flex-col items-center px-4 py-8">
      <ProductCarousel />

      {isSignedIn ? <AuthenticatedView /> : <UnauthenticatedView />}
    </main>
  )
}

function AuthenticatedView() {
  const messages = useQuery(api.messages.getForCurrentUser)

  return (
    <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-lg">
      <UserButton afterSignOutUrl="/" />
      <div className="bg-white shadow p-6 rounded-lg text-lg text-gray-700 w-full">
        Authenticated content: {messages?.length ?? 0}

      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-serif text-gray-800">Pricing & Payments</CardTitle>
        </CardHeader>
        <CardContent>
         10 Alterations a month
        </CardContent>
        <PricingTable />

      </Card>
    </div>
  )
}

function UnauthenticatedView() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-md">
      <Card className="shadow-lg border border-[#d8a48f] bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-serif text-[#2e2e2e]">
            Welcome to Perfect Fit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            Sign up or log in to book your clothing alterations and track your orders.
          </p>
          <SignInButton mode="modal">
            <Button className="bg-[#d8a48f] hover:bg-[#c58e78] text-white px-6 py-3 text-lg">
              Get Started
            </Button>
          </SignInButton>
        </CardContent>
      </Card>
    </div>
  )
}
