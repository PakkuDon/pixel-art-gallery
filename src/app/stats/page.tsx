import React, { Suspense } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Metadata } from "next"
import { format as formatDate, parseISO as parseISODate } from "date-fns"

import { PixelArtRepository } from "../../PixelArtRepository"
import { Card } from "../../components/Card/Card"
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection"
import { EntriesPostedEachYear } from "./EntriesPostedEachYear"
import { EntriesPostedEachMonth } from "./EntriesPostedEachMonth"
import { PaletteUsage } from "./PaletteUsage"
import { ResolutionUsage } from "./ResolutionUsage"
import { LinkToGallery } from "./LinkToGallery"
import { TagList } from "../../components/TagList/TagList"
const RelativeTime = dynamic(
  () => import("../../components/RelativeTime/RelativeTime"),
  { ssr: false },
)

PixelArtRepository.load()

const LinkToGalleryPlaceholder = () => <Link href="/">Back to gallery</Link>

const PALETTE_USAGE_THRESHOLD = 4
const RESOLUTION_USAGE_THRESHOLD = 1

export const metadata: Metadata = {
  title: "Portfolio stats",
  openGraph: {
    siteName: "Pixel Art Gallery | PakkuDon",
  },
}

const Statistics = () => {
  const entries = PixelArtRepository.findAll()
  const totalEntries = entries.length
  const countByTag = PixelArtRepository.countByTag()
  const countByYear = PixelArtRepository.countBy((entry) =>
    new Date(entry.date).getFullYear().toString(),
  ).sort((a, b) => a.key.localeCompare(b.key))
  const countByMonth = PixelArtRepository.countBy((entry) =>
    formatDate(new Date(entry.date), "yyyy-MM"),
  ).sort((a, b) => a.key.localeCompare(b.key))
  let countByPalette = PixelArtRepository.countBy((entry) => entry.palette.name)
  let countByResolution = PixelArtRepository.countBy(
    (entry) => entry.resolution || "",
  )

  // Filter out palettes and resolutions with few records
  const otherPalettes = countByPalette.filter(
    ({ count }) => count <= PALETTE_USAGE_THRESHOLD,
  )
  countByPalette = [
    ...countByPalette.filter(({ count }) => count > PALETTE_USAGE_THRESHOLD),
    {
      key: "other",
      count: otherPalettes.reduce((total, { count }) => total + count, 0),
    },
  ]
  const otherResolutions = countByResolution.filter(
    ({ count }) => count <= RESOLUTION_USAGE_THRESHOLD,
  )
  countByResolution = [
    ...countByResolution.filter(
      ({ count }) => count > RESOLUTION_USAGE_THRESHOLD,
    ),
    {
      key: "other",
      count: otherResolutions.reduce((total, { count }) => total + count, 0),
    },
  ]

  const firstPostDate = parseISODate(entries[0].date)
  const lastPostDate = parseISODate(entries[entries.length - 1].date)

  return (
    <Card>
      <main className="statistics">
        <div className="content">
          <Suspense fallback={<LinkToGalleryPlaceholder />}>
            <LinkToGallery />
          </Suspense>
        </div>
        <div className="content">
          <h2>Overview</h2>
          <div>
            <strong>First entry posted: </strong>
            <div>
              {formatDate(firstPostDate, "MMM d yyyy h:mm aa O")}{" "}
              <RelativeTime date={firstPostDate} />
            </div>
          </div>
          <div>
            <strong>Last entry posted: </strong>
            <div>
              {formatDate(lastPostDate, "MMM d yyyy h:mm aa O")}{" "}
              <RelativeTime date={lastPostDate} />
            </div>
          </div>
          <div>
            <strong>Total entries: </strong>
            <span>{totalEntries}</span>
          </div>
          <div>
            <strong>Palettes used: </strong>
            <span>{countByPalette.length}</span>
          </div>
        </div>
        <div className="content">
          <CollapsibleSection label={<h2>Tag usage</h2>}>
            <TagList countByTag={countByTag} />
          </CollapsibleSection>
        </div>
        <div className="content">
          <EntriesPostedEachYear countByYear={countByYear} />
        </div>
        <div className="content">
          <EntriesPostedEachMonth countByMonth={countByMonth} />
        </div>
        <div className="content">
          <PaletteUsage
            countByPalette={countByPalette}
            totalEntries={totalEntries}
          />
        </div>
        <div className="content">
          <ResolutionUsage
            countByResolution={countByResolution}
            totalEntries={totalEntries}
          />
        </div>
      </main>
    </Card>
  )
}

export default Statistics
