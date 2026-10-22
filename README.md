# Flashscore Scraper - Tennis, Football Results and Fixtures

Flashscore scraper for match results and fixtures of any sport and any season: tennis, football, basketball, hockey and more. Scores per set, half or quarter, tiebreaks, round, players or teams, countries, start time, status (retired, walkover). Past seasons too. No login, no browser.

**[Run it on Apify Store](https://apify.com/kamerozkan/flashscore-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/flashscore-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/flashscore-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/flashscore-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "startUrls": [
    "https://www.flashscore.com/tennis/atp-singles/wimbledon-2024/results/"
  ],
  "include": "results",
  "maxMatchesPerUrl": 500,
  "maxItems": 1000
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "matchId": "0zSjbNHM",
    "url": "https://www.flashscore.com/match/0zSjbNHM/",
    "sport": "football",
    "category": "ENGLAND",
    "tournament": "Premier League",
    "country": "England",
    "surface": null,
    "season": "2026/2027",
    "stage": "Main",
    "round": "Round 7",
    "startTime": "2026-10-19T19:00:00Z",
    "status": "finished",
    "statusCode": 3,
    "home": {
      "name": "Tottenham",
      "id": "UDg08Ohm",
      "slug": "tottenham",
      "country": null,
      "url": "https://www.flashscore.com/team/tottenham/UDg08Ohm/"
    },
    "away": {
      "name": "Coventry",
      "id": "GOvB22xg",
      "slug": "coventry",
      "country": null,
      "url": "https://www.flashscore.com/team/coventry/GOvB22xg/"
    },
    "homeScore": 3,
    "awayScore": 1,
    "homeScoreFullTime": 3,
    "awayScoreFullTime": 1,
    "winner": "home",
    "periods": [
      {
        "period": 1,
        "home": 1,
        "away": 0
      },
      {
        "period": 2,
        "home": 2,
        "away": 1
      }
    ],
    "listType": "results",
    "sourceUrl": "https://www.flashscore.com/football/england/premier-league/results/",
    "scrapedAt": "2026-10-22T09:18:16.598150Z"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/flashscore-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
