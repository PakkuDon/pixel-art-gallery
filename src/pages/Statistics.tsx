import React from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"

const Statistics = () => (
  <div className="single-column-layout">
    <Card>
      <Link to="/">Back to gallery</Link>
    </Card>
  </div>
)

export default Statistics
