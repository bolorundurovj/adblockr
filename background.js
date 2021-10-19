const defaultFilters = [
  '*://*.zedo.com/*',
  '*://*.googleadservices.com/*',
  '*://*.doubleclick.net/*',
  '*://*.adskeeper.com/*',
  '*://*.mellowads.com/*',
  '*://*.googlesyndication.com/*',
  '*://*.adbrite.com/*',
  '*://*.quantserve.com/*',
  '*://*.scorecardresearch.com/*',
  '*://*.exponential.com/*',
  '*://*.creative.ak.fbcdn.net/*',
  '*://*.google-analytics.com/*',
  '*://*.kevel.co/*',
  '*://*.smartadserver.com/*',
  '*://*.magnite.com/*',
  '*://*.broadstreetads.com/*',
  '*://*.adgear.com/*',
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  {
    urls: defaultFilters,
  },
  ['blocking']
);
