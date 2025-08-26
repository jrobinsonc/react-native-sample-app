#!/bin/bash

echo "🔄 Resetting Watchman..."
watchman watch-del-all

echo "🛑 Shutting down Watchman server..."
watchman shutdown-server

echo "✅ Watchman reset and shutdown complete!"
