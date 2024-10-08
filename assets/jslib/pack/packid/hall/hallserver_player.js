//这里是主码对应子消息码 key为pb对应消息包名称
var pack = {
    HeartReq         : 1,              //心跳
    PlayerInfoNotice : 80,             //玩家信息通知
    PlayerInfoSynNotice : 81,          //玩家字段信息同步
}

module.exports = pack