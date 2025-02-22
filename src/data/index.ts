import { entries as entries2020 } from "./2020"
import { entries as entries2021 } from "./2021"
import { entries as entries2022 } from "./2022"
import { entries as entries2023 } from "./2023"
import { entries as entries2024 } from "./2024"
import { entries as entries2025 } from "./2025"

export interface PixelArtEntry {
  src: string
  title: string
  description?: string
  palette: {
    name: string
    url?: string
    colours?: string[]
  }
  resolution: string
  date: string
  tags: string[]
  aliases?: string[]
}

const entries: PixelArtEntry[] = [
  ...entries2020,
  ...entries2021,
  ...entries2022,
  ...entries2023,
  ...entries2024,
  ...entries2025,
]

export { entries }
