import React from "react"
import { Link } from "react-router-dom"

import PixelArtRepository from "../PixelArtRepository"
import Card from "../components/Card"
import TagList from "../components/Sidebar/TagList"

const Statistics = () => (
  <div className="single-column-layout">
    <Card>
      <div>
        <Link to="/">Back to gallery</Link>
      </div>
      <div>
        <TagList countByTag={PixelArtRepository.countByTag()} />
      </div>
    </Card>
  </div>
)

export default Statistics
