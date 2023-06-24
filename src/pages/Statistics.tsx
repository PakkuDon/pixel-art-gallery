import React from "react"
import { Link } from "react-router-dom"
import { Bar } from "react-chartjs-2"
import { format as formatDate } from "date-fns"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js"
import autocolors from "chartjs-plugin-autocolors"

import { PixelArtRepository } from "../PixelArtRepository"
import { encodeURIFragment } from "../util/encodeURIFragment"
import { Card } from "../components/Card/Card"
import { TagList } from "../components/TagList/TagList"

ChartJS.register(autocolors, CategoryScale, LinearScale, BarElement, Tooltip)

interface StatisticsProps {
  searchQuery: string
}
const PALETTE_USAGE_THRESHOLD = 4
const RESOLUTION_USAGE_THRESHOLD = 1
const Statistics = ({ searchQuery }: StatisticsProps) => {
  const totalEntries = PixelArtRepository.findAll().length
  const countByTag = PixelArtRepository.countByTag()
  const countByYear = PixelArtRepository.countBy((entry) =>
    new Date(entry.date).getFullYear().toString()
  ).sort((a, b) => a.key.localeCompare(b.key))
  const countByMonth = PixelArtRepository.countBy((entry) =>
    formatDate(new Date(entry.date), "yyyy-MM")
  ).sort((a, b) => a.key.localeCompare(b.key))
  let countByPalette = PixelArtRepository.countBy((entry) => entry.palette.name)
  let countByResolution = PixelArtRepository.countBy(
    (entry) => entry.resolution || ""
  )
  const queryString = searchQuery ? encodeURIFragment(`?q=${searchQuery}`) : ""

  // Filter out palettes and resolutions with few records
  const otherPalettes = countByPalette.filter(
    ({ count }) => count <= PALETTE_USAGE_THRESHOLD
  )
  countByPalette = [
    ...countByPalette.filter(({ count }) => count > PALETTE_USAGE_THRESHOLD),
    {
      key: "other",
      count: otherPalettes.reduce((total, { count }) => total + count, 0),
    },
  ]
  const otherResolutions = countByResolution.filter(
    ({ count }) => count <= RESOLUTION_USAGE_THRESHOLD
  )
  countByResolution = [
    ...countByResolution.filter(
      ({ count }) => count > RESOLUTION_USAGE_THRESHOLD
    ),
    {
      key: "other",
      count: otherResolutions.reduce((total, { count }) => total + count, 0),
    },
  ]

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
          <Bar
            options={{
              indexAxis: "y",
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
        <div className="content">
          <h2>Resolution</h2>
          <Bar
            options={{
              indexAxis: "y",
              animation: false,
              plugins: {
                autocolors: {
                  mode: "data",
                  offset: 2,
                },
              },
            }}
            data={{
              labels: countByResolution.map((value) => {
                const percentage = ((value.count / totalEntries) * 100).toFixed(
                  1
                )
                return `${value.key} (${percentage}%)`
              }),
              datasets: [
                {
                  data: countByResolution.map((value) => value.count),
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
