import React, { useState } from "react"

interface CollapsibleSectionProps {
  label: string
  children: React.ReactNode
}
const CollapsibleSection = ({ label, children }: CollapsibleSectionProps) => {
  const [visible, setVisible] = useState(false)

  if (visible) {
    return (
      <div>
        <div>
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
    <div>
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
