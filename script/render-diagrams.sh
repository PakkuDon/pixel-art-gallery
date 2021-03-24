#!/usr/bin/env bash

if ! command -v plantuml >/dev/null; then
  echo "could not find plantuml"
  exit 1
fi

plantuml -tpng -checkmetadata -nbthread auto '**/*.puml'
