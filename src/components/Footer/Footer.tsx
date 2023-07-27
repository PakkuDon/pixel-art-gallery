import React from "react"
import Link from "next/link"
import classnames from "classnames"

import { DarkModeToggle } from "./DarkModeToggle/DarkModeToggle"
import "./Footer.css"

const Footer = () => (
  <footer className={classnames("footer", "content")}>
    <ul>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Link href="/stats">Stats</Link>
      </li>
      <li>
        <Link href="/feed.xml" target="_blank">
          RSS Feed
        </Link>
      </li>
      <li>
        Source code on{" "}
        <a
          href="https://github.com/PakkuDon/pixel-art-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  </footer>
)

export { Footer }
