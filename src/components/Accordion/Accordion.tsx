import React, { useState } from "react"

interface AccordionProps {
  label: string
  children: React.ReactNode
}
const Accordion = ({ label, children }: AccordionProps) => {
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

export { Accordion }
