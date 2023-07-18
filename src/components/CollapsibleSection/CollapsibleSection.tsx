"use client"

import React, { useState } from "react"
import "./CollapsibleSection.css"

interface CollapsibleSectionProps {
  label: string
  children: React.ReactNode
}
const CollapsibleSection = ({ label, children }: CollapsibleSectionProps) => {
  const [visible, setVisible] = useState(false)

  if (visible) {
    return (
      <div>
        <div className="collapsibleHeader">
          {label}
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label={`Hide ${label}`}
          >
            -
          </button>
        </div>
        {children}
      </div>
    )
  }
  return (
    <div className="collapsibleHeader">
      {label}
      <button
        type="button"
        onClick={() => setVisible(true)}
        aria-label={`Show ${label}`}
      >
        +
      </button>
    </div>
  )
}

export { CollapsibleSection }
