import React from "react"
import { Link } from "react-router-dom"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
} from "chart.js"
import { Bar, Pie } from "react-chartjs-2"
import autocolors from "chartjs-plugin-autocolors"
import { format as formatDate } from "date-fns"

import { PixelArtRepository } from "../PixelArtRepository"
import { Card } from "../components/Card/Card"
import { TagList } from "../components/Sidebar/TagList/TagList"

ChartJS.register(
  autocolors,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip
)

interface StatisticsProps {
  searchQuery: string
}
const Statistics = ({ searchQuery }: StatisticsProps) => {
  const totalEntries = PixelArtRepository.findAll().length
  const countByTag = PixelArtRepository.countByTag()
  const countByYear = PixelArtRepository.countBy((entry) =>
    new Date(entry.date).getFullYear().toString()
  ).sort((a, b) => a.key.localeCompare(b.key))
  const countByMonth = PixelArtRepository.countBy((entry) =>
    formatDate(new Date(entry.date), "yyyy-MM")
  ).sort((a, b) => a.key.localeCompare(b.key))
  const countByPalette = PixelArtRepository.countBy(
    (entry) => entry.palette.name
  )
  const queryString = searchQuery ? `?q=${searchQuery}` : ""

  return (
    <Card>
      <main className="statistics">
        <div className="content">
          <Link to={`/${queryString}`}>Back to gallery</Link>
        </div>
        <div className="content">
          <div>
            <strong>Total entries: </strong>
            <span>{PixelArtRepository.findAll().length}</span>
          </div>
          <div>
            <strong>Palettes used: </strong>
            <span>{countByPalette.length}</span>
          </div>
        </div>
        <div className="content">
          <TagList countByTag={countByTag} />
        </div>
        <div className="content">
          <h2>Entries posted each year</h2>
          <Bar
            options={{ indexAxis: "y", animation: false }}
            data={{
              labels: countByYear.map((value) => value.key),
              datasets: [
                {
                  data: countByYear.map((value) => value.count),
                  backgroundColor: "#336699",
                },
              ],
            }}
          />
        </div>
        <div className="content">
          <h2>Entries posted each month</h2>
          <Bar
            options={{ indexAxis: "y", animation: false }}
            data={{
              labels: countByMonth.map((value) => value.key),
              datasets: [
                {
                  data: countByMonth.map((value) => value.count),
                  backgroundColor: "#336699",
                },
              ],
            }}
          />
        </div>
        <div className="content">
          <h2>Palette Usage</h2>
          <Pie
            options={{
              animation: false,
              plugins: {
                autocolors: {
                  mode: "data",
                },
              },
            }}
            data={{
              labels: countByPalette.map((value) => {
                const percentage = ((value.count / totalEntries) * 100).toFixed(
                  1
                )
                return `${value.key} (${percentage}%)`
              }),
              datasets: [
                {
                  data: countByPalette.map((value) => value.count),
                },
              ],
            }}
          />
        </div>
      </main>
    </Card>
  )
}

export { Statistics }
