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
import { Card } from "../components/Card"
import { TagList } from "../components/Sidebar/TagList"

ChartJS.register(
  autocolors,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip
)

const Statistics = () => {
  const countByTag = PixelArtRepository.countByTag()
  const countByYear = PixelArtRepository.countBy((entry) =>
    new Date(entry.date).getFullYear().toString()
  ).sort((a, b) => a.key.localeCompare(b.key))
  const countByMonth = PixelArtRepository.countBy((entry) =>
    formatDate(new Date(entry.date), "yyyy-MM")
  ).sort((a, b) => a.key.localeCompare(b.key))
  const countByPalette = PixelArtRepository.countBy((entry) => {
    // Cheap hack to get palette URL
    // TODO: Introduce palette field to pixel art entries and group by that
    const { description } = entry
    if (description?.match("lospec.com/palette-list")) {
      const paletteUrl = description.match(
        /lospec\.com\/palette-list\/([\w-]+)/
      )
      return paletteUrl ? paletteUrl[1] : ""
    }
    return "custom"
  })

  return (
    <Card>
      <main className="statistics">
        <div className="content">
          <Link to="/">Back to gallery</Link>
        </div>
        <div className="content">
          <TagList countByTag={countByTag} />
        </div>
        <div className="content">
          <h2>Entries posted each year</h2>
          <Bar
            options={{ indexAxis: "y" }}
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
            options={{ indexAxis: "y" }}
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
              plugins: {
                autocolors: {
                  mode: "data",
                },
              },
            }}
            data={{
              labels: countByPalette.map((value) => value.key),
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
