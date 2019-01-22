function eatPageReceiver(request, sender, sendResponse) {
    
    console.log("1111dasdada");
    let chatTabs = document.getElementById("ChatTabsPagelet"); 

    if (chatTabs) {
        chatTabs.style.visibility = "collapse";
    }


    let buddyList = document.getElementById("BuddylistPagelet"); 
    if (buddyList) {
        buddyList.style.visibility = "collapse";
    }


    let chatSidebar = document.getElementsByClassName("fbChatSidebar");

    if (chatSidebar[0]) {
        chatSidebar[0].style.visibility = "collapse";
    }



    let button = document.getElementsByName("mercurymessages")[0];
    //button[0].style.visibility = "collapse";

    /*
    button.addEventListener("click", function () {
        button.style.visibility = "collapse";
        //document.getElementById("demo").innerHTML = "Hello World";
    }); 

    */





    var a = document.createElement('a');
    //var linkText = document.createTextNode("myt");
    //a.appendChild(linkText);
    a.className = "jewelButton";
    a.className += " _3eo8";
     

let div = document.createElement("div");
    div.className = "_2n_9";


   // div.style += "box-shadow: inset 0 0 0 2000px rgba(66, 103, 178, 0.6)";
    div.setAttribute("style", "box-shadow: inset 0 0 0 2000px rgba(66, 103, 178, 0.7);");

    a.appendChild(div);
    a.title = "my title text";
    a.href = "https://messenger.com";
    a.target = "_blank";






    let buttonParent = button.parentNode;

    var textnode = document.createElement("BUTTON");
    button.parentNode.replaceChild(a, button);


    let t = document.createTextNode("ME");
    textnode.appendChild(t);


    textnode.addEventListener("click", function () {
        alert("omg");
        //buttonClone.style.visibility = "collapse";
        //document.getElementById("demo").innerHTML = "Hello World";
    }); 


    /*
    let buttonClone = button.cloneNode(true);
    button.parentNode.replaceChild(buttonClone, button);

    buttonClone.addEventListener("click", function () {
        alert("omg");
        //buttonClone.style.visibility = "collapse";
        //document.getElementById("demo").innerHTML = "Hello World";
    }); 
*/

 /*
    document.body.textContent = "";
    var header = document.createElement('h1');
    header.textContent = request.replacement;
    document.body.appendChild(header);

    var text = document.createElement('h4');
    text.textContent = "logi: " + x; 
    document.body.appendChild(text);

    */

//    document.body.style.backgroundColor = 'fuchsia';
/*
    $('body').css("background-color", "red");


    $(document).ready(function () {
       // $("#msg").html("<h2>jQuery Hello World</h2>");

       console.log("wowowow");
    });

    */
}
browser.runtime.onMessage.addListener(eatPageReceiver);