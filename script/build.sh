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

echo "🏭 Generating build script..."
yarn run webpack --config config/cli-scripts.config.js

echo "📄 Generating RSS feed and pages for each entry..."
node script/generated/generateArtifacts.js