#!/bin/sh
# Detect AI slop patterns
grep -rn "I cannot and will not\|I do not have the ability\|as an AI" --include="*.md" --include="*.txt" . && exit 1 || exit 0
