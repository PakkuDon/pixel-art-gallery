#! /usr/bin/env bash

set -euo pipefail

echo "🛠 Generating dist build..."
yarn run webpack --config config/production.config.js

echo "🖼 Copying images to dist/..."
cp -r img/ dist/img/

echo "📄 Generating pages for each entry..."
yarn run babel-node src/util/generatePages.js

echo "📢 Generating RSS feed..."
yarn run babel-node src/util/generateRssFeed.js
