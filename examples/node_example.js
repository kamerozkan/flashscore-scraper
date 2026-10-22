// Run flashscore-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "startUrls": [
    "https://www.flashscore.com/tennis/atp-singles/wimbledon-2024/results/"
  ],
  "include": "results",
  "maxMatchesPerUrl": 500,
  "maxItems": 1000
};
const run = await client.actor('kamerozkan/flashscore-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
