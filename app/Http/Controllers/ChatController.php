<?php
/**
 * socket测试控制器
 */
namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
// use GatewayWorker\Applications\YourApp\Events;

class ChatController extends BaseController
{

	/**
	 * 聊天首页
	 * [index description]
	 * @return [type] [description]
	 */
	public function bindUid(Request $request)
	{
		if ($request->isMethod('post')) {
			//$clientId = $request->input('client_id');
			var_dump(\Events::getServerInfo());die;
			echo json_encode($clientId);
			$uid = 1;
			\Events::onConnect($clientId, $uid);
			// Gateway::sendToUid('aaa');
		} else {
// 			Events::sendToAll('宣告
// 汝之身托吾麾下；吾之命运附汝剑上
// 响应圣杯之召唤，遵从这意志、道理者，回应我！
// 吾乃成就世间一切善行者，吾乃集世间万恶之总成者
// 缠绕三大言灵之七天
// 穿越抑制之轮出现吧！天平的守护者！');
			\Events::sendToAll(json_encode(array('msg' => '接受到一条来自作者的推送', 'type' => 'init')));
		}


	}



}