// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var global = require("global")
import proto from '../proto.js/proto.js'
import netpack from '../jslib/net/netpack.js'

cc.Class({
    extends: cc.Component,

    properties: {
        nickname : {
            default : null,
            type : cc.Node,
        }
    },

    LoginRes(msg) {
        console.log("LoginRes >>>>>>> ", msg)
        let label = this.nickname.getComponent(cc.Label)
        label.string = msg.nickname

        // 以秒为单位的时间间隔
        var interval = 5;
        // 重复次数
        var repeat = 99999999999;
        // 开始延时
        var delay = 1;
        this.schedule(function() {
            // 这里的 this 指向 component
            let heart_req = {
                time: Date.now()
            };
            
            let send_buffer = netpack.pack(".hallserver_hall.HeartReq",proto.hallserver_hall.HeartReq.encode(heart_req).finish())
            this.ws.send(send_buffer)
        }, interval, repeat, delay);
    },

    // LIFE-CYCLE CALLBACKS:
    dispatch(packname, packbuffer) {
        console.log("dispatch >>> ",packname)
        switch(packname) {
            case ".hallserver_login.LoginRes":{
                console.log("packbuffer",packbuffer)
                let msg = proto.hallserver_login.LoginRes.decode(packbuffer);
                this.LoginRes(msg)
                break
            }
            default:
                console.log("unkown packname ",packname)
        }
    },

    onLoad () {
        console.log("global >>>>> ",global)
        let ws = new WebSocket("ws://" + global.hallhost)

        let hall_mgr = this
        hall_mgr.ws = ws 
        ws.onopen = function (event) {
            console.log("Send Text WS was opened.",this.m_player_info);
            let login_req = {
                token: global.halltoken,
                playerId: global.player_id,
            };
            
            let send_buffer = netpack.pack(".hallserver_login.LoginReq",proto.hallserver_login.LoginReq.encode(login_req).finish())
            ws.send(send_buffer)
        };
        ws.onmessage = function (event) {
            console.log("onmessage:",event.data)
            const reblob = netpack.unpack(event.data).then(({ packname, packbuffer }) => {
                console.log("包名:", packname);
                hall_mgr.dispatch(packname, packbuffer)
            })
            .catch((error) => {
                console.error("解包错误:", error.message);
            });
        };
        ws.onerror = function (event) {
            console.log("Send Text fired an error");
        };
        ws.onclose = function (event) {
            console.log("WebSocket instance closed.");
        };
       
        setTimeout(function () {
            if (ws.readyState === WebSocket.OPEN) {
                //ws.send("Hello WebSocket, I'm a text message.");
                console.log("send login >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            }
            else {
                console.log("WebSocket instance wasn't ready...");
            }
        }, 3);
    },

    onMatchClick(event) {
        console.log("请求匹配 >>>>>>>>>>>>>>>>>>>>")
        let match_game_req = {
            gameId : 1,
        }
        let send_buffer = netpack.pack(".hallserver_hall.MatchGameReq", proto.hallserver_hall.MatchGameReq.encode(match_game_req).finish())
        this.ws.send(send_buffer)
    },

    start () {

    },

    update (dt) {

    },
});
