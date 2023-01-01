import entries2020 from "./2020"
import entries2021 from "./2021"
import entries2022 from "./2022"
import entries2023 from "./2023"

export interface PixelArtEntry {
  src: string
  title: string
  description?: string
  date: string
  tags: string[]
  aliases?: string[]
}

const entries: PixelArtEntry[] = [
  ...entries2020,
  ...entries2021,
  ...entries2022,
  ...entries2023,
]

export default entries
