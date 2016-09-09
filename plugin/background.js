function checkForValidUrl(tabId, changeInfo, tab) {
    if (changeInfo.status !== 'loading') {
        return;
    }
    // for github.io from http to https
    if (tab.url.match(/http:\/\/[a-zA-z0-9_\-]+\.github\.io\/.*/) !== null) {
        var url='https' + tab.url.substr(4);
        chrome.tabs.update(tabId, {url: url}, function () {
            console.log('github.io pages redirect from http to https');
        });
    }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);