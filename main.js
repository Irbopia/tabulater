//chrome.tabs.create(object createProperties, function callback)

chrome.tabs.create({ url: chrome.extension.getURL ("tabulater.html")}, () => {console.log("Turtles")})
