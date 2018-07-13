var isOpen = 0;
var viewPortWidth = 0;
var viewPortHeight = 0;

window.onload = function()
{
    viewPortWidth = window.innerWidth;
    viewPortHeight = window.innerHeight;
    
    if(viewPortWidth <= 800)
    {
        document.getElementById("menuBar").style.height = "200px";
        
        document.getElementById("discord").style.width = "195px";
        document.getElementById("discord").style.height = "195px";
        document.getElementById("reddit").style.width = "195px";
        document.getElementById("reddit").style.height = "195px";
        document.getElementById("menuImg").style.width = "195px";
        document.getElementById("menuImg").style.height = "195px";
        
        document.body.style.fontSize = "45px";
    }
}

function menuClick()
{    
    if(isOpen == 0)
    {
        isOpen = 1;
        openMenu();
    }
    else if(isOpen == 1)
    {
        isOpen = 0;
        closeMenu();
    }
}

function openMenu()
{
document.getElementById("mainMenu").style.display = "block";
}

function closeMenu()
{
    document.getElementById("mainMenu").style.display = "none";
}
