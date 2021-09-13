chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        let myRule = {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostSuffix: ".bilibili.com" },
                })
            ],
            actions: [new chrome.declarativeContent.ShowAction()],
        };
        let rules = [myRule];
        chrome.declarativeContent.onPageChanged.addRules(rules);
    });
});
chrome.action.onClicked.addListener((tab) =>{
    console.log("hello, world: " + tab.id);
});