const { hallserver_email } = require("../../proto-js/proto")

//这里是主码对应子消息码 key为pb对应消息包名称
var pack = {
    hallserver_player : 101,             //玩家信息
    hallserver_item : 102,               //玩家道具
    hallserver_match : 103,              //匹配
    hallserver_friend : 104,             //好友
    hallserver_game_record : 105,        //游戏记录
    hallserver_email : 106,              //邮件
}

module.exports = pack