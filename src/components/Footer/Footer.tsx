import React from "react"
import Link from "next/link"
import classnames from "classnames"

import "./Footer.css"

interface FooterProps {
  prefersDarkTheme: boolean
  onDarkThemeToggle: () => void
}

const Footer = ({ prefersDarkTheme, onDarkThemeToggle }: FooterProps) => (
  <footer className={classnames("footer", "content")}>
    <ul>
      <li>
        <label htmlFor="prefers-dark-theme">
          <input
            type="checkbox"
            id="prefers-dark-theme"
            checked={prefersDarkTheme}
            onChange={() => onDarkThemeToggle()}
          />{" "}
          Dark theme?
        </label>
      </li>
      <li>
        <Link href="/stats">Stats</Link>
      </li>
      <li>
        <a href="./feed.xml" target="_blank" rel="noopener noreferrer">
          RSS Feed
        </a>
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
