var isMenuOpen = 0;

/*
var isHomeOpen = 1;
var isStoriesOpen = 0;
var isVideosOpen = 0;
var isProjectsOpen = 0;
var isIntexOpen = 0;
var isContactOpen = 0;
*/

var viewPortWidth = 0;
var viewPortHeight = 0;

var url1 = window.location.href;
var url2 = "";
var urlCheck1 = "";
var urlCheck2 = "";
var urlCheck3 = "";
var urlContains = 0;

var currentPage;

/*
*
*
*
*
*
*
*
*/

window.onload = function urlCheck()
{
    url1 = window.location.href;
    var j = 0;
    var k = 0;
    
    for(var i = 0; i < url1.length; i++)
    {
        if(urlCheck2[urlCheck2.length - 1] == "=")
        {
            urlCheck3[k] = url1[i];
            j++;
        }
        else if(urlCheck1[urlCheck1.length - 1] == "?")
        {
            urlCheck2[j] = url1[i];
            j++;
        }
        else
        {
            urlCheck1 = url1[i];
        }
    }
    
    
    alert(urlCheck1[urlCheck1.length - 1]);
    alert(urlCheck2);
    alert(urlCheck2[urlCheck2.length - 1]);
    alert(urlCheck3);
    
    
    if(urlCheck2 == "homepage")
    {
        homeClick();
    }
    else if(urlCheck2 == "storiespage")
    {
        storiesClick();
    }
    else
    {
        window.location.assign(url1 + "/?homepage");
    }
}

/*
*
*
*
*
*
*
*
*/

function menuClick()
{    
    if(isMenuOpen == 0)
    {
        isMenuOpen = 1;
        openMenu()
    }
    else if(isMenuOpen == 1)
    {
        isMenuOpen = 0;
        closeMenu()
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

/*
*
*
*
*
*
*
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

/*
*
*
*
*
*
*
*
*/

function homeUrl()
{
    url1 = window.location.href;
    
    for(var i = 0; i < url1.length; i++)
    {
        if(urlCheck1 == "#")
        {
            urlCheck2 = url1[i];
        }
        else
        {
            urlCheck1 = url1[i];
        }
    }
    
    url2 = urlCheck1 + "homepage"
    
    window.location.assign(url2);
}

function storiesUrl()
{
    url1 = window.location.href;
    
    for(var i = 0; i < url1.length; i++)
    {
        if(urlCheck1 == "#")
        {
            urlCheck2 = url1[i];
        }
        else
        {
            urlCheck1 = url1[i];
        }
    }
    
    url2 = urlCheck1 + "storiespage"
    
    window.location.assign(url2);
}

/*
function homeOpenClose()
{
    if(isHomeOpen == 0)
    {
        isHomeOpen = 1;
        isStoriesOpen = 0;
        isVideosOpen = 0;
        isProjectsOpen = 0;
        isIntexOpen = 0;
        isContactOpen = 0;
        
        isMenuOpen = 0;
        
        closeMenu();
        openPage();
    }
}

function storiesOpenClose()
{
    if(isStoriesOpen == 0)
    {
        isHomeOpen = 0;
        isStoriesOpen = 1;
        isVideosOpen = 0;
        isProjectsOpen = 0;
        isIntexOpen = 0;
        isContactOpen = 0;
        
        isMenuOpen = 0;
        
        closeMenu();
        openPage();
    }
}

function videosOpenClose()
{
    if(isVideosOpen == 0)
    {
        isHomeOpen = 0;
        isStoriesOpen = 0;
        isVideosOpen = 1;
        isProjectsOpen = 0;
        isIntexOpen = 0;
        isContactOpen = 0;
        
        isMenuOpen = 0;
        
        closeMenu();
        openPage();
    }
}

function projectsOpenClose()
{
    if(isProjectsOpen == 0)
    {
        isHomeOpen = 0;
        isStoriesOpen = 0;
        isVideosOpen = 0;
        isProjectsOpen = 1;
        isIntexOpen = 0;
        isContactOpen = 0;
        
        isMenuOpen = 0;
        
        closeMenu();
        openPage();
    }
}

function indexOpenClose()
{
    if(isIntexOpen == 0)
    {
        isHomeOpen = 0;
        isStoriesOpen = 0;
        isVideosOpen = 0;
        isProjectsOpen = 0;
        isIntexOpen = 1;
        isContactOpen = 0;
        
        isMenuOpen = 0;
        
        closeMenu();
        openPage();
    }
}

function contactOpenClose()
{
    if(isContactOpen == 0)
    {
        isHomeOpen = 0;
        isStoriesOpen = 0;
        isVideosOpen = 0;
        isProjectsOpen = 0;
        isIntexOpen = 0;
        isContactOpen = 1;
        
        isMenuOpen = 0;
        
        closeMenu();
        openPage();
    }
}

function openPage()
{
    if(isHomeOpen == 1)
    {
        document.getElementById("homepage").style.display = "block";
    }
    else
    {
        document.getElementById("homepage").style.display = "none";
    }
    
    if(isStoriesOpen == 1)
    {
        document.getElementById("storiespage").style.display = "block";
    }
    else
    {
        document.getElementById("storiespage").style.display = "none";
    }
    
    if(isVideosOpen == 1)
    {
        document.getElementById("videospage").style.display = "block";
    }
    else
    {
        document.getElementById("videospage").style.display = "none";
    }
    
    if(isProjectsOpen == 1)
    {
        document.getElementById("projectspage").style.display = "block";
    }
    else
    {
        document.getElementById("projectspage").style.display = "none";
    }
    
    if(isIntexOpen == 1)
    {
        document.getElementById("indexpage").style.display = "block";
    }
    else
    {
        document.getElementById("indexpage").style.display = "none";
    }
    
    if(isContactOpen == 1)
    {
        document.getElementById("contactpage").style.display = "block";
    }
    else
    {
        document.getElementById("contactpage").style.display = "none";
    }
    
}
*/
