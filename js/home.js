var isOpen = 0;
var closeSize = 0;
var openSize = 100;
var openOpacity = 1;
var closeOpacity = 0;

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
    var openSizeFinal = openSize + "vh";
    
    document.getElementById("mainMenu").style.height = openSizeFinal;
    document.getElementById("menuItemDiv").style.height = openSizeFinal;
}

function closeMenu()
{
    var closeSizeFinal = closeSize + "vh";
    
    document.getElementById("mainMenu").style.height = closeSizeFinal;
    document.getElementById("menuItemDiv").style.height = closeSizeFinal;
}
