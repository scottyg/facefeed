var facefeed = function( page_id, target) {
	
	if(!target){
		target = ".facefeed";
	}
	
	var page_feed = 'https://www.facebook.com/feeds/page.php?format=atom10&id=' + page_id;
	var feed_api = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=' + encodeURIComponent(page_feed);
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', feed_api, true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if(xmlhttp.status == 200) {
				var data = JSON.parse(xmlhttp.responseText);
				var entry_html = '';
				for(var i = 0; i < data.responseData.feed.entries.length; i++) {
					entry_html = entry_html +
						'<li>'+
							'<p class="author">'+data.responseData.feed.entries[i].author+'</p>'+
							'<p class="date"><a href="'+data.responseData.feed.entries[i].link+'">'+data.responseData.feed.entries[i].publishedDate+'</a></p>'+
							'<p class="content>'+data.responseData.feed.entries[i].content+'</p>'+
						'</li>';
				}
				document.querySelector(target).innerHTML = entry_html;
			}
		}
	};
	xmlhttp.send(null);
}
