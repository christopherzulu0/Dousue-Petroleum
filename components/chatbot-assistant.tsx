"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, X, ThumbsUp, ThumbsDown, Maximize2, Minimize2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Dousue Petroleum virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help with your fuel delivery needs. Would you like to place a new order or check on an existing one?",
        "Our current diesel price is $1.85 per liter for bulk orders. Would you like me to calculate a quote for you?",
        "You can track your delivery in real-time through your customer dashboard. Would you like me to show you how?",
        "We offer emergency fuel delivery services 24/7. Would you like me to connect you with our emergency response team?",
        "I can help you optimize your fuel consumption. Would you like some tips on how to improve efficiency?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, botMessage])
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Make the chatbot more responsive on mobile
  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg z-50"
          aria-label="Open chat assistant"
        >
          <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={
              isMinimized
                ? { opacity: 1, y: 0, scale: 0.9, height: "auto", width: "300px" }
                : { opacity: 1, y: 0, scale: 1, height: "500px", width: "100%", maxWidth: "380px" }
            }
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 bg-background border rounded-lg shadow-xl overflow-hidden flex flex-col z-50"
            style={{
              width: isMinimized ? "300px" : window.innerWidth < 500 ? "calc(100% - 24px)" : "380px",
              right: window.innerWidth < 500 ? "12px" : "24px",
              bottom: window.innerWidth < 500 ? "12px" : "24px",
              maxHeight: window.innerWidth < 500 ? "calc(100vh - 100px)" : "500px",
            }}
          >
            {/* Chat header */}
            <div className="p-3 sm:p-4 border-b flex items-center justify-between bg-primary text-primary-foreground">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Chatbot" />
                  <AvatarFallback className="bg-primary-foreground text-primary">DP</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-sm">Dousue Assistant</h3>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
                        onClick={() => setIsMinimized(!isMinimized)}
                      >
                        {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>{isMinimized ? "Expand" : "Minimize"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
                        onClick={() => setIsOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Close</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat messages */}
                <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className="flex items-start gap-2 max-w-[85%] sm:max-w-[80%]">
                          {message.sender === "bot" && (
                            <Avatar className="h-7 w-7 sm:h-8 sm:w-8 mt-0.5 shrink-0">
                              <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm">
                                DP
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div
                              className={`rounded-lg p-2 sm:p-3 ${
                                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                              }`}
                            >
                              <p className="text-xs sm:text-sm">{message.content}</p>
                            </div>
                            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                          </div>
                          {message.sender === "user" && (
                            <Avatar className="h-7 w-7 sm:h-8 sm:w-8 mt-0.5 shrink-0">
                              <AvatarFallback className="text-xs sm:text-sm">You</AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-start gap-2 max-w-[85%] sm:max-w-[80%]">
                          <Avatar className="h-7 w-7 sm:h-8 sm:w-8 mt-0.5 shrink-0">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs sm:text-sm">
                              DP
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="rounded-lg p-2 sm:p-3 bg-muted">
                              <div className="flex space-x-1">
                                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0ms]"></div>
                                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:150ms]"></div>
                                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:300ms]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Message input */}
                <div className="p-3 sm:p-4 border-t">
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <Input
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="pr-10 text-sm"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                      >
                        <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </div>
                  </div>

                  {messages.length > 1 && (
                    <div className="flex items-center justify-center mt-2 space-x-2">
                      <span className="text-[10px] sm:text-xs text-muted-foreground">Was this helpful?</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-7 sm:w-7">
                        <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6 sm:h-7 sm:w-7">
                        <ThumbsDown className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

