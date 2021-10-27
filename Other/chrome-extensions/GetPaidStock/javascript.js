	var currUrl;
	var currFullUrl;
	function init() {
		chrome.tabs.getSelected(null,function(tab) {
			getUrl(tab.url);
		});
	}
	
	function getUrl(url){
		currFullUrl=url;
		currUrl=getHost(url);
		if(currUrl=="chrome:" || currUrl=="file:" || currUrl=="chrome-extension:" || currUrl=="view-source:http:" || currUrl=="view-source:https:" || currUrl.indexOf(".")==-1){
			unsetData();
			return;
		}
		
		//Change iframe url
		document.getElementById('iframe').src = 'https://getpaidstock.com/token.php?url=' + currUrl;
		document.getElementById('iframe').onload = function(){
			document.getElementById('iframe').contentWindow.postMessage('','*');
		}
	}
	
	function unsetData(){
		window.close();
	}

	function getHost(url) {
		var host = url.replace(/^xxxxxxxx{0,1}:\/\//,'');
//		host = host.replace(/^www\./,'');
//		host = host.replace(/^www[a-z,0-9,A-Z]\./,'');
//		host = host.replace(/\/.*/,'');
		return host;
	}
	
	function autoResize(data){
		if(data.indexOf(',')!=-1){
			data = data.split(',');
			var newheight = data[0];
			var newwidth = data[1];

			document.getElementById('iframe').style.height= (newheight) + "px";
			document.getElementById('iframe').style.width= (newwidth) + "px";
			
			document.body.style.height= (newheight) + "px";
			document.body.style.width= (newwidth) + "px";
		}
	}
	
	window.onmessage = function(event) {
		autoResize(event.data);
	};
	
	window.onload=function(){init()}