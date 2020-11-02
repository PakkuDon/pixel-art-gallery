#! /usr/bin/env bash

set -euo pipefail

yarn run webpack --config config/production.config.js
