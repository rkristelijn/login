#!/bin/sh
# Check that research docs are not stale (>180 days)
find docs -name "*.md" -mtime +180 2>/dev/null | head -5
exit 0
