"use client"

import { forwardRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"

interface LiquidButtonProps extends ButtonProps {
  children: ReactNode
}

export const LiquidButton = forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button ref={ref} className={`relative overflow-hidden group ${className}`} {...props}>
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-500/80 z-0"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 z-0"
            initial={{ y: 0 }}
            whileHover={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <span className="relative z-10">{children}</span>
        </div>
      </Button>
    )
  },
)

LiquidButton.displayName = "LiquidButton"

