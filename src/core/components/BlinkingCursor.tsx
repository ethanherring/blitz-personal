import React, { useState, useEffect } from "react"

function BlinkingCursor() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return <span className={`animate-pulse ${showCursor ? "" : "animate-none"}`}>|</span>
}

export default BlinkingCursor
