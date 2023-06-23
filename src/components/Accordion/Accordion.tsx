import React, { useState } from "react"

interface AccordionProps {
  openLabel: string
  closeLabel: string
  children: React.ReactNode
}
const Accordion = ({ openLabel, closeLabel, children }: AccordionProps) => {
  const [visible, setVisible] = useState(false)

  if (visible) {
    return (
      <div>
        <div>
          <button type="button" onClick={() => setVisible(false)}>
            {closeLabel}
          </button>
        </div>
        {children}
      </div>
    )
  }
  return (
    <div>
      <button type="button" onClick={() => setVisible(true)}>
        {openLabel}
      </button>
    </div>
  )
}

export { Accordion }
