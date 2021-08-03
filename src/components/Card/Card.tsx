import React from "react"

import "./Card.css"

interface CardProps {
    children: React.ReactNode
}
const Card = ({ children }: CardProps) => <div className="card">{children}</div>

export default Card
