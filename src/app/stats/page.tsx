import React, { Suspense } from "react"
import Link from "next/link"
import { Metadata } from "next"
import { format as formatDate } from "date-fns"

import { PixelArtRepository } from "../../PixelArtRepository"
import { Card } from "../../components/Card/Card"
import { CollapsibleSection } from "../../components/CollapsibleSection/CollapsibleSection"
import { EntriesPostedEachYear } from "./EntriesPostedEachYear"
import { EntriesPostedEachMonth } from "./EntriesPostedEachMonth"
import { PaletteUsage } from "./PaletteUsage"
import { ResolutionUsage } from "./ResolutionUsage"
import { LinkToGallery } from "./LinkToGallery"
import { TagList } from "../../components/TagList/TagList"

PixelArtRepository.load()

const LinkToGalleryPlaceholder = () => <Link href="/">Back to gallery</Link>

const PALETTE_USAGE_THRESHOLD = 4
const RESOLUTION_USAGE_THRESHOLD = 1

export const metadata: Metadata = {
  title: "Portfolio stats",
}

const Statistics = () => {
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
          <Suspense fallback={<LinkToGalleryPlaceholder />}>
            <LinkToGallery />
          </Suspense>
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
          <CollapsibleSection label="Tag usage">
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
