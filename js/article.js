document.write
(
    '<div class="articleBody">'+
    '    <div class="articleText">'+
    '        <embed id="embeddedHtml">'+
    '    </div>'+
    '    <div class="articleFooter">'+
    '        <div class="comments">'+
    '            <img class="commentsImg" src="img/icons/reddit.png" alt="reddit comments">'+
    '            <p id="commentsText" class="whiteTextFooter">Comments</p>'+
    '        </div>'+
    '        <a id="fullArticleLink" href="whoops.html"><div class="fullArticle">'+
    '            <p id="fullArticleText" class="whiteTextFooter">Full Article</p>'+
    '        </div></a>'+
    '    </div>'+
    '</div>'
);

function chooseMedia()
{
    var articleParent;
    var articleLocation;
    
    articleParent = document.getElementById("articleDiv").parentElement.id;
    
    //alert(articleParent);
    
    articleLocation = "media/" + articleParent;
    
    //alert(articleLocation);
    
    return articleLocation;
}

function setMedia()
{
    var articleLocation = chooseMedia();
    
    document.getElementById("embeddedHtml").src = articleLocation;
    document.getElementById("fullArticleLink").href = articleLocation;
}
