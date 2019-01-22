browser.contextMenus.create({
    id: "eat-page",
    title: "Eat this page"
});

function messageTab(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
        replacement: "Message from the extension!"
    });
}

function onExecuted(result) {
    console.log("jau end");

    var querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then(messageTab);
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
    console.log("jau");

    if (info.menuItemId == "eat-page") {
        let executing = browser.tabs.executeScript({
            file: "page-eater.js"
        });
        executing.then(onExecuted);
    }
});


browser.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    console.log("jau");

    TÄMÄ EI TOIMI !
    //browser.tabs.executeScript(null, { file: "page-eater.js" });
    let executing = browser.tabs.executeScript({
        file: "page-eater.js"
    });
    executing.then(onExecuted);

}, {
        url: [{ originAndPathMatches: "^.+://facebook.com/.+/.+$" }]
    });



browser.tabs.onUpdated.addListener(function (tabId, changedInfo, tab) {
    console.log("onUpdated");
});


browser.windows.onFocusChanged.addListener(function (windowId) {

    console.log("onFocusChanged");
});
