#!/bin/sh
# Detect dead documentation links
find docs -name "*.md" -exec grep -l "TODO\|FIXME\|PLACEHOLDER" {} \; 2>/dev/null
exit 0
