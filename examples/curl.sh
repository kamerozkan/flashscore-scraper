#!/usr/bin/env bash
# Run flashscore-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~flashscore-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"startUrls": ["https://www.flashscore.com/tennis/atp-singles/wimbledon-2024/results/"], "include": "results", "maxMatchesPerUrl": 500, "maxItems": 1000}'
