"""Run flashscore-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'startUrls': ['https://www.flashscore.com/tennis/atp-singles/wimbledon-2024/results/'],
 'include': 'results',
 'maxMatchesPerUrl': 500,
 'maxItems': 1000}
run = client.actor("kamerozkan/flashscore-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
