import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"
import Card from "../components/Card"

interface StatisticsProps {
  prefersDarkTheme?: boolean
}

const Statistics = ({ prefersDarkTheme }: StatisticsProps) => (
  <div
    className={classnames("single-column-layout", {
      "dark-theme": prefersDarkTheme,
      "light-theme": !prefersDarkTheme,
    })}
  >
    <Card>
      <Link to={"/"}>Back to gallery</Link>
    </Card>
  </div>
)

export default Statistics
