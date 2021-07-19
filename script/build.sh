#! /usr/bin/env bash

set -euo pipefail

if [ -n "$(git status --porcelain | grep 'M src/data.js')" ]; then
  read -p "src/data.js contains uncomitted changes which will be published. Are you sure you want to continue? (Y/N) " confirm
  if [[ $confirm != "y" && $confirm != "Y" ]]; then
    echo "Build cancelled. Exiting..."
    exit 1
  fi
fi

echo "🛠 Generating dist build..."
yarn run webpack --config config/production.config.js

echo "🖼 Copying images to dist/..."
cp -r img/ dist/

echo "📄 Generating pages for each entry..."
yarn run babel-node src/util/generatePages.js

echo "📢 Generating RSS feed..."
yarn run babel-node src/util/generateRssFeed.js
