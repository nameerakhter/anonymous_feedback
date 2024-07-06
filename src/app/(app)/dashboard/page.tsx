'use client'
import { Message } from '@/model/User'
import React, { useState } from 'react'

const page = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isloading, setIsLoading] = useState(false)
  return (
    <div>
      Dashboard
    </div>
  )
}

export default page
