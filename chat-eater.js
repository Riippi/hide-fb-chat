
// Hide the tabs from the bottom
let chatTabs = document.getElementById("ChatTabsPagelet");

if (chatTabs) {
    chatTabs.style.visibility = "collapse";
}

// Hide the buddylist
let buddyList = document.getElementById("BuddylistPagelet");
if (buddyList) {
    buddyList.style.visibility = "collapse";
}

// Hide chat sidebar
let chatSidebar = document.getElementsByClassName("fbChatSidebar");

if (chatSidebar[0]) {
    chatSidebar[0].style.visibility = "collapse";
}


// Replace the messages button with link to messenger.com
let button = document.getElementsByName("mercurymessages")[0];

if (button) {
    let a = document.createElement('a');
    a.className = "jewelButton";
    a.className += " _3eo8";

    let div = document.createElement("div");
    div.className = "_2n_9";
    // Add color overlay to the icon
    div.setAttribute("style", "box-shadow: inset 0 0 0 2000px rgba(66, 103, 178, 0.7);");

    a.appendChild(div);
    a.title = "my title text";
    a.href = "https://messenger.com";
    a.target = "_blank";
    button.parentNode.replaceChild(a, button);
}