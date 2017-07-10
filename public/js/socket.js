$(function(){
	var time = function(){
		var mydate = new Date();
		return mydate.toLocaleString();
	};
	ws = new WebSocket("ws://waiter.futa9.com:8282");
	console.log(ws);
	// 服务端主动推送消息时会触发这里的onmessage
	ws.onmessage = function(e){
	    // json数据转换成js对象
	    var data = eval("("+e.data+")");
	    // console.log(data);
	    // return false;
	    var type = data.type || '';
	    switch(type){
	        // Events.php中返回的init类型的消息，将client_id发给后台进行uid绑定
	        case 'init':
	            // 利用jquery发起ajax请求，将client_id发给后端进行uid绑定
	            var sendStr = "<li>\
	            				<p class='time'>\
	            					<span>"+time()+"</span>\
	            				</p>\
	            				<div class='main'>\
	            					<img class='avatar' src='../public/images/2.png' width='30' height='30'>\
	            					<div class='text'>"+data.msg+"</div>\
	            				</div\
	            			</li>";
	            $('.m-message ul').append(sendStr);

	            $.ajax({
	            	url:"/chat/bindUid",
	            	data:{'client_id':data.client_id,'X-CSRF-TOKEN':"{{csrf_token()}}"},
	            	dataType:'json',
	            	type:'post',
	            	headers:{
	            		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	            	},
	            	success:function(result){
	            		alert(result);
	            	}
	            });
	            break;
	        // 当mvc框架调用GatewayClient发消息时直接alert出来
	        default :
	            // alert(e.data);
	            $.ajax({
	            	url:"/chat/bindUid",
	            	data:{'client_id':data.client_id,'X-CSRF-TOKEN':"{{csrf_token()}}"},
	            	dataType:'json',
	            	type:'post',
	            	headers:{
	            		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	            	},
	            	success:function(result){
	            		alert(result);
	            	}
	            });
	            break;
	    }

		ws.onopen=function(){
			if(ws.readyState==1){
				ws.send('type=add&ming='+n);
			}
		}



	};




});