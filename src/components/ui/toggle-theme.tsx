"use client";
import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react/dist/iconify.js";

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-secondary rounded-full p-2">
    {theme === "light" ? (
      <Icon icon="line-md:moon-alt-to-sunny-outline-loop-transition" width={24} height={24} key={theme}/>
    ) : (
      <Icon icon="line-md:moon-rising-alt-loop" width={24} height={24} key={theme}/>
    )}
    <span className="sr-only">Toggle theme</span>
  </Button>
  
  )
}
