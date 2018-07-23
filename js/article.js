document.write
(
    '<div class="articleBody">'+
    '    <div class="articleText">'+
    '        <embed class="embeddedHtml">'+
    '    </div>'+
    '    <div class="articleFooter">'+
    '        <div class="comments">'+
    '            <img class="commentsImg" src="img/icons/reddit.png" alt="reddit comments">'+
    '            <p id="commentsText" class="whiteTextFooter">Comments</p>'+
    '        </div>'+
    '        <a href="media/articles/testDoc/testDoc.html"><div class="fullscreen">'+
    '            <p id="fullscreenText" class="whiteTextFooter">Full Screen</p>'+
    '        </div></a>'+
    '    </div>'+
    '</div>'
);

window.onload = function chooseMedia()
{
    var articleParent;
    var articleLocation;
    
    articleParent = document.getElementById("articleBody").parentElement;
    
    alert("4");
    
    alert(articleParent);
    
    articleLocation = "media/" + articleParent.parentNode;
    
    document.getElementById("embeddedHtml").src = articleLocation; 
}
