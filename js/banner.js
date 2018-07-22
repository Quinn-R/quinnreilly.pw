document.write(
'<div id="banner">'+
    '<div id="menu">'+
    '    <div id="menuBar">'+
    '        <img id="discord" src="img/icons/discord.png" alt="discord link">'+
    '        <img id="reddit" src="img/icons/reddit.png" alt="reddit link">'+
    '        <img id="menuImg" src="img/icons/menu.png" alt="open menu" onClick="menuClick()">'+
    '    </div>'+
    '    <div id="mainMenu">'+
    '        <div id="menuItemDiv">'+
    '            <div id="menuItem1" class="menuItem" onClick="homeClick()">'+
    '                <p id="menuItemText1" class="whiteTextMenu">Home</p>'+
    '            </div>'+
    '            <div id="menuItem2" class="menuItem" onClick="mediaClick()">'+
    '                <p id="menuItemText2" class="whiteTextMenu">Media</p>'+
    '            </div>'+
    '            <div id="menuItem3" class="menuItem" onClick="contactClick()">'+
    '                <p id="menuItemText3" class="whiteTextMenu">Contact</p>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>'+
    '<div id="innerBanner">'+
    '    <img id="bannerImage" src="img/banner.png" alt="banner">'+
    '</div>'+
'</div>'
);

function homeClick()
{
    location.href = "index.html";
}

function mediaClick()
{
    location.href = "media.html";
}

function contactClick()
{
    location.href = "contact.html";
}
