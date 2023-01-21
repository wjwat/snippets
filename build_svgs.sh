#!/bin/sh

out_dir="static/mermaid"

for file in mermaid/*.mmd; do
  base=$(basename "${file%.mmd}")
  npm run mmdc -- \
    -b transparent \
    -i "$file" -o \
    "$out_dir/$base.svg"
done
