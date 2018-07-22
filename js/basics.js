var isMenuOpen = 0;

var viewPortWidth = 0;
var viewPortHeight = 0;

var currentPage;

document.title = "quinnreilly.pw";

/*
*
*/

function menuClick()
{    
    if(isMenuOpen == 0)
    {
        
        openMenu();
    }
    else if(isMenuOpen == 1)
    {
        
        closeMenu();
    }
}

function openMenu()
{
    isMenuOpen = 1;
    document.getElementById("mainMenu").style.display = "block";
}

function closeMenu()
{
    isMenuOpen = 0;
    document.getElementById("mainMenu").style.display = "none";
}

/*
*
*/

function homeClick()
{
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("homepage").style.display = "block";
    document.getElementById("storiespage").style.display = "none";
    
    homeUrl()
}

function storiesClick()
{
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("storiespage").style.display = "block";
    
    storiesUrl()
}
