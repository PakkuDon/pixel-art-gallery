#! /usr/bin/env bash

set -euo pipefail

echo "Generating dist build..."
yarn run webpack --config config/production.config.js

echo "Copying images to dist/..."
cp -r img/ dist/img/
