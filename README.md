# Pixel Art Gallery

Hosted at https://pakkudon.github.io/pixel-art-gallery/

![Screenshot](./doc/screenshot.png)

## Made with

Most of these pieces were created in [GIMP](https://www.gimp.org/) with a few earlier pieces created in [Lospec's Pixel Editor](https://lospec.com/pixel-editor/). Images are either inspired by prompts from Lospec or Pixel Dailies or from other reference images.

The gallery itself is built using Next.js and TypeScript.

## Development

### Prerequisites

- Node (Built using v16 but may work with earlier versions)
- Yarn

### Local Development

- Clone repo
- `cd` into cloned repo and run `yarn install` to install dependencies
- Run `yarn dev` to start local development server
- Visit `localhost:3000` or whichever port the above server has used to view the page

### Scripts

```sh
# Starts local development server
yarn dev

# Formats docs and code using Prettier
yarn format

# Lints `src` directory
yarn lint

# Runs unit tests
yarn test

# Generate production-ready assets. Artifacts are written to `dist/`
yarn build

# Write production-ready assets to dist/pixel-art-gallery
# This can be used to simulate how the application will behave when deployed to a subpath
BASE_PATH='/pixel-art-gallery' yarn build

# Runs `build` script and pushes generated assets to Github Pages
yarn deploy
```

### Add pixel art entry

- Add new pixel art images to `public/img/<current year>` directory
- Add JSON entry for new image to `src/data/<current year>.ts`. Entries are written in chronological order. Schema for JSON object is as follows:

```js
{
  src: "[filename minus `img/` prefix (eg: 2020/20200101.png)]",
  title: "One-liner to describe piece",
  description: `
    Multiline string. Accepts markdown
  `,
  palette: {
    name: "Name of palette",
    url: "Link to palette. Optional",
    colours: ["Array of colours for palette", "Optional"],
  },
  resolution: "widthxheight",
  date: "Date in ISO 8601 format (eg: 2020-01-01T23:59+11:00)",
  tags: ["words", "can contain spaces"],
  aliases: ["optiona list of other URL slugs to use for this entry"],
},
```

- Run development server to preview changes.
- Run `yarn deploy` to build assets, link previews and generate RSS feed. This script will also deploy these to Github pages

### Directory structure

```sh
.
├── cypress         - Integration tests
├── dist            - Production-ready assets
├── doc             - Diagrams and images used in documents
│   └── adr         - Architecture Decision Records
├── public          - Static assets
│   └── img         - Pixel artwork
├── script          - Helper scripts
└── src             - Source code for React application
    ├── app         - Top-level route handlers
    ├── components  - Components reused across other components
    ├── data        - Metadata for pixel art
    └── util        - Helper functions
```

## Architecture Decisions

This project uses [Architecture Decision Records](https://adr.github.io/) to capture the rationale (or lack thereof) for architecturally significant decisions. You can find them at [doc/adr/](doc/adr/).
