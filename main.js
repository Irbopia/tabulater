// chrome.browserAction.onClicked.addListener(function (activetab) {
// 	chrome.tabs.create({ 'url': chrome.extension.getURL('tabulater.html') }, function (tab));
// });

// chrome.browserAction.onClicked.addListener(function () {
// 	chrome.tabs.create({ url: chrome.runtime.getURL("tabulater.html") });
// });

chrome.tabs.query({ windowId: chrome.windows.WINDOW_ID_CURRENT }, (tabs) => {
    document.write(`<h3>The tabs you're on are:</h3>`);
    document.write('<ul>');
    for(let i = 0; i < tabs.length; i++) {
        document.write(`<li>${tabs[i].url}</li>`);
    }
	document.write('<ul>');

	// loop through and remove all active tabs
    for(let i = 0; i < tabs.length-1; i++){
        chrome.tabs.remove(tabs[i].id);
    }
	
});








// chrome.browserAction.onClicked.addListener(function(activeTab){
//   chrome.tabs.create({'url': chrome.extension.getURL('notes.html')}, function(tab)
//   });
// });