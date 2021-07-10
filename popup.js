

// chrome.browserAction.onClicked.addListener(function (activetab) {
// 	chrome.tabs.create({ 'url': chrome.extension.getURL('tabulater.html') }, function (tab));
// });

// chrome.browserAction.onClicked.addListener(function () {
// 	chrome.tabs.create({ url: chrome.runtime.getURL("tabulater.html") });
// });

chrome.tabs.query({ windowId: chrome.windows.WINDOW_ID_CURRENT }, (tabs) => {
    document.write(`<link rel="stylesheet" href="style.css">`)
    document.write(`<h3>All open tabs</h3>`);
    document.write(`You have <strong>${tabs.length}</strong> tabs open <br /><br />`);
    document.write(`<a href="tabulater.html" target="_blank" id="close_tabs">Close Tabs</a>`);
    document.write('<ul>');
    for(let i = 0; i < tabs.length; i++) {
        document.write(`<li><a href="${tabs[i].url}" target="_blank">${tabs[i].url}</a></li>`);
    }
	document.write('<ul>');

	// loop through and remove all active tabs
    // for(let i = 0; i < tabs.length-1; i++){
    //     chrome.tabs.remove(tabs[i].id);
    // }
	
});








// chrome.browserAction.onClicked.addListener(function(activeTab){
//   chrome.tabs.create({'url': chrome.extension.getURL('notes.html')}, function(tab)
//   });
// });