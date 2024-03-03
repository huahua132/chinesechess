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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:
    dispatch(packname, packbuffer) {

    },

    onLoad () {
        console.log("global >>>>> ",global)
        let ws = new WebSocket("ws://" + global.hallhost)

        let hall_mgr = this
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

    start () {

    },

    // update (dt) {},
});
