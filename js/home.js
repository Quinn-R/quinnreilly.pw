var isOpen = 0;
var viewPortWidth = 0;
var viewPortHeight = 0;

window.onload = function writeHTMLasJS(){
    document.write("<div id=\"banner\">");
    document.write("            ");
    document.write("            <div id=\"menu\">");
    document.write("                ");
    document.write("                <div id=\"menuBar\">");
    document.write("                    ");
    document.write("                    <a href=\"in-progress.html\"><img id=\"discord\" src=\"img\/icons\/discord.png\" alt=\"discord link\"><\/a>");
    document.write("                    <a href=\"url\"><img id=\"reddit\" src=\"img\/icons\/reddit.png\" alt=\"reddit link\"><\/a>");
    document.write("                    <img id=\"menuImg\" src=\"img\/icons\/menu.png\" alt=\"open menu\" onClick=\"menuClick()\">");
    document.write("                    ");
    document.write("                <\/div>");
    document.write("                ");
    document.write("                <div id=\"mainMenu\">");
    document.write("                    ");
    document.write("                    <div id=\"menuItemDiv\">");
    document.write("                        ");
    document.write("                        <a href=\"index.html\"><div id=\"menuItem1\" class=\"menuItem\">");
    document.write("                            ");
    document.write("                            <p id=\"menuItemText1\" class=\"whiteTextMenu\">Home<\/p>");
    document.write("                            ");
    document.write("                        <\/div><\/a>");
    document.write("                        ");
    document.write("                        <a href=\"url\"><div id=\"menuItem2\" class=\"menuItem\">");
    document.write("                            ");
    document.write("                            <p id=\"menuItemText2\" class=\"whiteTextMenu\">Videos<\/p>");
    document.write("                            ");
    document.write("                        <\/div><\/a>");
    document.write("                        ");
    document.write("                        <a href=\"url\"><div id=\"menuItem3\" class=\"menuItem\">");
    document.write("                            ");
    document.write("                            <p id=\"menuItemText3\" class=\"whiteTextMenu\">Stories<\/p>");
    document.write("                            ");
    document.write("                        <\/div><\/a>");
    document.write("                        ");
    document.write("                        <a href=\"url\"><div id=\"menuItem4\" class=\"menuItem\">");
    document.write("                            ");
    document.write("                            <p id=\"menuItemText4\" class=\"whiteTextMenu\">Projects<\/p>");
    document.write("                            ");
    document.write("                        <\/div><\/a>");
    document.write("                        ");
    document.write("                        <a href=\"url\"><div id=\"menuItem5\" class=\"menuItem\">");
    document.write("                            ");
    document.write("                            <p id=\"menuItemText5\" class=\"whiteTextMenu\">Index<\/p>");
    document.write("                            ");
    document.write("                        <\/div><\/a>");
    document.write("                        ");
    document.write("                        <a href=\"url\"><div id=\"menuItem6\" class=\"menuItem\" onClick=\"linkClick('menuItem4')\">");
    document.write("                            ");
    document.write("                            <p id=\"menuItemText6\" class=\"whiteTextMenu\">Contact<\/p>");
    document.write("                            ");
    document.write("                        <\/div><\/a>");
    document.write("                        ");
    document.write("                    <\/div>");
    document.write("                    ");
    document.write("                <\/div>");
    document.write("                ");
    document.write("            <\/div>");
    document.write("            ");
    document.write("            <div id=\"innerBanner\">");
    document.write("                ");
    document.write("                <img id=\"bannerImage\" src=\"img\/banner.png\" alt=\"banner\">");
    document.write("                ");
    document.write("            <\/div>");
    document.write("            ");
    document.write("        <\/div>");
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
