"use client"

import React, { useState, useEffect, useCallback } from "react"

const DarkModeToggle = () => {
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(
    localStorage.getItem("theme") === "dark",
  )

  useEffect(() => {
    if (
      !localStorage.getItem("theme") &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPrefersDarkTheme(true)
      localStorage.setItem("theme", "dark")
    }
  }, [])

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme")
    document.body.classList.add(prefersDarkTheme ? "dark-theme" : "light-theme")
    localStorage.setItem("theme", prefersDarkTheme ? "dark" : "light")
  }, [prefersDarkTheme])

  const onDarkThemeToggle = useCallback(() => {
    setPrefersDarkTheme(!prefersDarkTheme)
  }, [prefersDarkTheme, setPrefersDarkTheme])

  return (
    <label htmlFor="prefers-dark-theme">
      <input
        type="checkbox"
        id="prefers-dark-theme"
        checked={prefersDarkTheme}
        onChange={() => onDarkThemeToggle()}
      />{" "}
      Dark theme?
    </label>
  )
}

export { DarkModeToggle }
