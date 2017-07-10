<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
	<title>waiter</title>
	<link rel="stylesheet" type="text/css" href="{{URL::asset('public/css/chat.css')}}">
	<script src="{{URL::asset('public/js/jquery-3.2.1.min.js')}}" type="text/javascript"></script>
	<script src="{{URL::asset('public/js/chat.js')}}" type="text/javascript"></script>
	<script src="{{URL::asset('public/js/socket.js')}}" type="text/javascript"></script>
</head>
<body>
	<div id="chat">
		<div class="sidebar">
			<div class="m-card">
				<header>
					<img class="avatar" alt="Coffce" src="../public/images/1.jpg" width="40" height="40"><p class="name">Coffce</p>
				</header>
				<footer>
					<input class="search" placeholder="search user...">
				</footer>
			</div>
			<!--v-component-->
			<div class="m-list">
				<ul>
				<!--v-for-start-->
					<li class="active">
						<img class="avatar" alt="客服" src="../public/images/2.png" width="30" height="30">
						<p class="name">客服</p>
					</li>
					<li>
						<img class="avatar" alt="关于" src="../public/images/3.jpg" width="30" height="30">
						<p class="name">关于</p>
					</li>
					<!--v-for-end-->
				</ul>
			</div>
			<!--v-component-->
		</div>
			<div class="main">
				<div class="m-message">
					<ul>
					<!--v-for-start-->
						<li>
							<p class='time'>
								<span>10:33</span>
							</p>
							<div class='self'>
								<img class='avatar' src='../public/images/2.png' width='30' height='30'>
								<div class='text'><p>宣告</p> <p>汝之身托吾麾下 吾之命运附汝剑 </p><p>响应圣杯之召唤，遵从这意志、道理者，回应我！</p><p>吾乃成就世间一切善行者，吾乃集世间万恶之总成者</p><p> 缠绕三大言灵之七天 </p>穿越抑制之轮出现吧！天平的守护者！</p></div>
							</div>
						</li>
						<!-- <li>
							<p class="time">
								<span>10:33</span>
							</p>
							<div class="main">
								<img class="avatar" src="../public/images/2.png" width="30" height="30">
								<div class="text">
									Hello，my master！
								</div>
							</div>
						</li>
						<li>
							<p class="time">
								<span>10:33</span>
							</p>
							<div class="main">
								<img class="avatar" src="../public/images/2.png" width="30" height="30">
								<div class="text">
									<p>请问有什么可以帮你的？</p>
									<p>功能列表：</p>
									<p>1.查询公交</p>
								</div>
							</div>
						</li> -->
						<!--v-for-end-->
					</ul>
				</div>
				<!--v-component-->
				<div class="m-text">
					<textarea id="send" placeholder="按 Ctrl + Enter 发送"></textarea>
				</div>
				<!--v-component-->
			</div>
	</div>
</body>
</html>