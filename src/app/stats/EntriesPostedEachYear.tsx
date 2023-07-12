"use client"

import React from "react"
import { Bar } from "react-chartjs-2"

import "./chartjs-setup"

const EntriesPostedEachYear = ({
  countByYear,
}: {
  countByYear: { key: string; count: number }[]
}) => (
  <>
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
  </>
)

export { EntriesPostedEachYear }
