facefeed
==

Returns Facebook page feed as JSON object.

Parameters
--
- app_id
- page_id
- callback function

```html
<fb:login-button scope="public_profile,email" onlogin="feed.checkLoginState()" data-auto-logout-link="true"></fb:login-button>
	
<script src="facefeed.js"></script>
<script>
	var feed = new facefeed( {app_id}, {page_id}, function(response){
		alert(response);
	});// app_id, page_id, callback()
</script>
```

App ID
--

Create a Facebook app in order to get the app id.

Page ID
--

You can get get the id of your page by going to https://graph.facebook.com/{page-slug} . The json object there will contain the id.

Callback Function
--

Returns JSON object `response`.

```javascript
function(response){
	//Do something with response
});
```