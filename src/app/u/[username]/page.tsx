'use client'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import React from 'react'
import { Form } from 'react-hook-form'
import { useSession } from 'next-auth/react'
const page = () => {
  const { data: session } = useSession();
  const username = session?.user?.username
  
  return (
    <div>
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 text-black">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            Public Profile link
          </h1>
          <p>
          {username ? (
        `Send Anonymous Message to ${username}`
      ) : (
        'Please log in to see your username.'
      )}
          </p>
        </section>

    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  

        </main>
    </div>
  )
}

export default page
