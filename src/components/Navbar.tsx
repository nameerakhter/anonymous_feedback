"use client"
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'


const Navbr = () => {

  const {data: session} = useSession()
  
  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbr
