import React from "react"

import "./Card.css"

interface CardProps {
    children: React.ReactChildren
}
const Card = ({ children }: CardProps) => <div className="card">{children}</div>

export default Card
