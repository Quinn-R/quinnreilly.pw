var isOpen = 0;

/*
var closeSize = 0;
var openSize = 100;
var closeOpacity = 0;
var openOpacity = 1;

var menuItemOpenSize = 50;
var menuItemCloseSize = 0;
*/

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
    /*
    var openSizeFinal = openSize + "vh";
    var menuItemOpenSizeFinal = menuItemOpenSize + "px";
    
    document.getElementById("mainMenu").style.height = openSizeFinal;
    */
    
    document.getElementById("mainMenu").style.display = "block";
    
    /*
    document.getElementById("menuItem1").style.height = menuItemOpenSizeFinal;
    document.getElementById("menuItem2").style.height = menuItemOpenSizeFinal;
    document.getElementById("menuItem3").style.height = menuItemOpenSizeFinal;
    document.getElementById("menuItem4").style.height = menuItemOpenSizeFinal;
    */
}

function closeMenu()
{
    /*
    var closeSizeFinal = closeSize + "vh";
    var menuItemCloseSizeFinal = menuItemCloseSize + "px";
    
    document.getElementById("mainMenu").style.height = closeSizeFinal;
    */
    
    document.getElementById("mainMenu").style.display = "none";
    
    /*
    document.getElementById("menuItem1").style.height = menuItemCloseSizeFinal;
    document.getElementById("menuItem2").style.height = menuItemCloseSizeFinal;
    document.getElementById("menuItem3").style.height = menuItemCloseSizeFinal;
    document.getElementById("menuItem4").style.height = menuItemCloseSizeFinal;
    */
}
