//这里是主码对应子消息码 key为pb对应消息包名称
var pack = {
    JoinReq : 1,     //加入房间请求
    JoinRes : 2,     //回复加入房间请求
    HeartReq : 3,    //心跳包
}

module.exports = pack