#!/bin/bash
set -e
cd "$(dirname "$0")/.."
# Use installed Node, or the existing Codex runtime on this Mac.
if ! command -v node >/dev/null 2>&1; then
  catering_runtime="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"
  if [ -x "$catering_runtime/node" ]; then
    export PATH="$catering_runtime:$PATH"
  else
    echo "Install Node.js 22.12 or newer, restart VS Code, then try again."
    exit 1
  fi
fi
if [ ! -d node_modules ]; then
  echo "Installing website dependencies. Internet access is needed the first time."
  npm install
fi
npm run dev
