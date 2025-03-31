"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = {
  name: string
  href: string
  children?: {
    name: string
    href: string
    description?: string
  }[]
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navItems?: NavItem[]
}

export function MobileNav({ isOpen, onClose, navItems = [] }: MobileNavProps) {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      {/* Mobile menu panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            {navItems &&
              navItems.map((item) => (
                <li key={item.name} className="border-b pb-3">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex items-center justify-between w-full py-2 text-left"
                      >
                        <span
                          className={`text-base font-medium ${
                            pathname === item.href ? "text-primary" : "text-gray-700"
                          }`}
                        >
                          {item.name}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${openSubmenu === item.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      {openSubmenu === item.name && (
                        <ul className="mt-2 pl-4 space-y-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                className="flex items-center py-2 text-sm text-gray-600 hover:text-primary"
                                onClick={onClose}
                              >
                                <ChevronRight className="mr-2 h-4 w-4" />
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2 text-base font-medium ${
                        pathname === item.href ? "text-primary" : "text-gray-700 hover:text-primary"
                      }`}
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
          </ul>

          <div className="mt-6 pt-6 border-t">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}

