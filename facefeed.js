/*! facefeed.js v0.1.0 2014-06-29 */
var facefeed=function(a,b){b||(b=".facefeed");var c="https://www.facebook.com/feeds/page.php?format=atom10&id="+a,d="https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q="+encodeURIComponent(c),e=new XMLHttpRequest;e.open("GET",d,!0),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){for(var a=JSON.parse(e.responseText),c="",d=0;d<a.responseData.feed.entries.length;d++)c=c+'<li><p class="author">'+a.responseData.feed.entries[d].author+'</p><p class="date"><a href="'+a.responseData.feed.entries[d].link+'">'+a.responseData.feed.entries[d].publishedDate+'</a></p><p class="content>'+a.responseData.feed.entries[d].content+"</p></li>";document.querySelector(b).innerHTML=c}},e.send(null)};