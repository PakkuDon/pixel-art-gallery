"use client"

import React from "react"
import { Bar } from "react-chartjs-2"

import "./chartjs-setup"

const PaletteUsage = ({
  countByPalette,
  totalEntries,
}: {
  countByPalette: { key: string; count: number }[]
  totalEntries: number
}) => (
  <>
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
          const percentage = ((value.count / totalEntries) * 100).toFixed(1)
          return `${value.key} (${percentage}%)`
        }),
        datasets: [
          {
            data: countByPalette.map((value) => value.count),
          },
        ],
      }}
    />
  </>
)

export { PaletteUsage }
