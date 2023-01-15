import React from "react"
import { Link } from "react-router-dom"

import PixelArtRepository from "../PixelArtRepository"
import Card from "../components/Card"
import TagList from "../components/Sidebar/TagList"

const Statistics = () => {
  const countByTag = PixelArtRepository.countByTag()
  const countByYear = PixelArtRepository.countBy((entry) =>
    new Date(entry.date).getFullYear().toString()
  ).sort((a, b) => a.key.localeCompare(b.key))
  const countByMonth = PixelArtRepository.countBy((entry) => {
    const date = new Date(entry.date)
    return `${date.getFullYear()}-${date.getMonth() + 1}`
  }).sort((a, b) => a.key.localeCompare(b.key))

  return (
    <Card>
      <main className="statistics">
        <div>
          <Link to="/">Back to gallery</Link>
        </div>
        <div>
          <TagList countByTag={countByTag} />
        </div>
        <div>
          <h2>Entries posted each year</h2>
          {countByYear.map(({ key, count }) => (
            <div key={key}>
              <strong>{key}:</strong> {count}
            </div>
          ))}
        </div>
        <div>
          <h2>Entries posted each month</h2>
          {countByMonth.map(({ key, count }) => (
            <div key={key}>
              <strong>{key}:</strong> {count}
            </div>
          ))}
        </div>
      </main>
    </Card>
  )
}

export default Statistics
