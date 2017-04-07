function ajax(method, url, data, success) {
	var xhr = null;
	try { //创建ajax对象
		xhr = new XMLHttpRequest();
	} catch (e) {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	if (method == 'get' && data) {
		url += '?' + data;   //get发送数据方式
	}
	xhr.open(method,url,true);
	if (method == 'get') {
		xhr.send();
	} else {     //method发送数据方式
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	
	xhr.onreadystatechange = function() { //等待服务器返回内容
		
		if ( xhr.readyState == 4 ) {
			if ( xhr.status == 200 ) {
				success && success(xhr.responseText);//服务器解析完响应内容后，在客户端执行的操作
			} else {
				alert('出错了,Err：' + xhr.status);
			}
		}
		
	}
}