# Pixel Art Gallery

Hosted at https://pakkudon.github.io/pixel-art-gallery/

![Screenshot](./doc/screenshot.png)

## Made with

Most of these pieces were created in [GIMP](https://www.gimp.org/) with a few earlier pieces created in [Lospec's Pixel Editor](https://lospec.com/pixel-editor/). Images are either inspired by prompts from Lospec or Pixel Dailies or from other reference images.

The gallery itself is built using React and TypeScript. CSS is also processed with [Autoprefixer](https://www.npmjs.com/package/autoprefixer) to generate vendor-specific prefixes.

## Development

### Prerequisites

- Node (Built using v16 but may work with earlier versions)
- Yarn

### Local Development

- Clone repo
- `cd` into cloned repo and run `yarn install` to install dependencies
- Run `yarn dev` to start local development server
- Visit `localhost:8080` or whichever port the above server has used to view the page

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

# Generates bundled assets, link previews and RSS feed. Artifacts are written to `dist/`
yarn build

# Runs `build` script and pushes generated assets to Github Pages
yarn deploy
```

### Add pixel art entry

- Add new pixel art images to `img/<current year>` directory
- Add JSON entry for new image to `src/data/<current year>.ts`. Entries are written in chronological order. Schema for JSON object is as follows:

```js
{
  src: "[filename minus `img/` prefix (eg: 2020/20200101.png)]",
  title: "One-liner to describe piece",
  description: `
    Multiline string. Accepts markdown
  `,
  date: "date formatted in YYYY-MM-DD HH:SS UTC Offset (eg: 2020-01-01 00:00 +1100)",
  tags: ["words", "can contain spaces"],
  aliases: ["optiona list of other URL slugs to use for this entry"],
},
```

- Run development server to preview changes.
- Run `yarn deploy` to build assets, link previews and generate RSS feed. This script will also deploy these to Github pages

## Deployment process

![Deployment workflow](doc/deployment.png)

## Architecture Decisions

This project uses [Architecture Decision Records](https://adr.github.io/) to capture the rationale (or lack thereof) for architecturally significant decisions. You can find them at [doc/adr/](doc/adr/).
