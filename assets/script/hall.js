// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var global = require("global")
import proto from '../proto.js/proto.js'
import netpack from '../jslib/net/netpack.js'
import ITEM from '../jslib/enum/ITEM.js'

cc.Class({
    extends: cc.Component,

    properties: {
        nickname : {
            default : null,
            type : cc.Node,
        },
        matchgame : {
            default : null,
            type : cc.Node,
        },
        matching : {
            default : null,
            type : cc.Node,
        },
        matchsucc : {
            default : null,
            type : cc.Node,
        },
        match_succ_remain_time : {
            default : null,
            type : cc.Node,
        },
        accepting : {
            default : null,
            type : cc.Node,
        },
        accept : {
            default : null,
            type : cc.Node,
        },

        score : {
            default : null,
            type : cc.Node,
        },
    },

    LoginRes(msg) {
        console.log("LoginRes >>>>>>> ", msg)
        // 以秒为单位的时间间隔
        var interval = 5;
        this.schedule(function() {
            // 这里的 this 指向 component
            let heart_req = {
                time: Date.now()
            };
            
            let send_buffer = netpack.pack(".hallserver_player.HeartReq",proto.hallserver_player.HeartReq.encode(heart_req).finish())
            this.ws.send(send_buffer)
        }, interval);
    },

    //匹配请求回复
    MatchGameRes(msg) {
        console.log("MatchGameRes >>>>>>> ", msg, this.is_clickReqMatch)
        this.m_matching = true
        if (this.is_clickReqMatch) {
            this.m_matchtime = 0
        }
    },

    //取消匹配回复
    CancelMatchGameRes(msg) {
        console.log("CancelMatchGameRes >>>>>>> ", msg)
        this.m_matching = false
        this.m_matchtime = 0
    },

    //匹配成功
    MatchGameNotice(msg) {
        console.log("MatchGameNotice >>>>>>> ", msg)
        this.m_match_accept = false
      
        this.matchsucc.active = true
        this.m_matching = false
        this.m_match_succ = true
        this.m_match_succ_remain_time = msg.remainTime
        this.m_match_succ_session_id = msg.sessionId
        this.m_match_succ_time = 0

        this.m_time_callback = function() {
            console.log("MatchGameNotice remain time over >>>>>> ")
            // 这里的 this 指向 component
            this.matchsucc.active = false
            this.m_match_succ = false
            if (this.m_match_accept) {
                let match_game_req = {
                    gameId : 1,
                }
                this.is_clickReqMatch = false
                let send_buffer = netpack.pack(".hallserver_match.MatchGameReq", proto.hallserver_match.MatchGameReq.encode(match_game_req).finish())
                this.ws.send(send_buffer)
            }

            this.m_match_accept = false
        }
        
        this.scheduleOnce(this.m_time_callback, msg.remainTime + 1);
    },

    //接受对局
    AcceptMatchRes(msg) {
        console.log("AcceptMatchRes >>>>>>> ", msg)
        this.m_match_accept = true
    },

    //通知进去对局
    JoinGameNotice(msg) {
        console.log("AcceptMatchRes >>>>>>> ", msg)
        global.gamehost = msg.gamehost
        global.gametoken = msg.gametoken
        global.gametableid = msg.tableId
        cc.director.loadScene("game");
    },

    //玩家信息推送
    PlayerInfoNotice(msg) {
        console.log("PlayerInfoNotice >>>>>>> ", msg)
        let label = this.nickname.getComponent(cc.Label)
        label.string = msg.nickname
    },

    //道具信息推送
    ItemListNotice(msg) {
        console.log("ItemListNotice >>>>>>> ", msg)
        let item_list = msg.itemList
        for (let i = 0; i < item_list.length; i++) {
            let one_item = item_list[i]
            let id = one_item.id
            let count = one_item.count
            this.m_item_map[id] = count
        }

        let label = this.score.getComponent(cc.Label)
        if (this.m_item_map[ITEM.score]) {
            label.string = this.m_item_map[ITEM.score]
        } else {
            label.string = 0
        }

        console.log("ItemListNotice >>>> ", this.m_item_map)
    },
    // LIFE-CYCLE CALLBACKS:
    dispatch(packname, packbuffer) {
        console.log("dispatch >>> ",packname)
        switch(packname) {
            case ".game_login.LoginRes":{
                let msg = proto.game_login.LoginRes.decode(packbuffer);
                this.LoginRes(msg)
                break
            }
            case ".hallserver_match.MatchGameRes":{
                let msg = proto.hallserver_match.MatchGameRes.decode(packbuffer);
                this.MatchGameRes(msg)
                break
            }
            case ".hallserver_match.CancelMatchGameRes":{
                let msg = proto.hallserver_match.CancelMatchGameRes.decode(packbuffer);
                this.CancelMatchGameRes(msg)
                break
            }
            case ".hallserver_match.MatchGameNotice":{
                let msg = proto.hallserver_match.MatchGameNotice.decode(packbuffer);
                this.MatchGameNotice(msg)
                break
            }
            case ".hallserver_match.AcceptMatchRes":{
                let msg = proto.hallserver_match.AcceptMatchRes.decode(packbuffer);
                this.AcceptMatchRes(msg)
                break
            }
            case ".hallserver_match.JoinGameNotice":{
                let msg = proto.hallserver_match.JoinGameNotice.decode(packbuffer);
                this.JoinGameNotice(msg)
                break
            }
            case ".hallserver_player.PlayerInfoNotice":{
                let msg = proto.hallserver_player.PlayerInfoNotice.decode(packbuffer);
                this.PlayerInfoNotice(msg)
                break
            }
            case ".hallserver_item.ItemListNotice": {
                let msg = proto.hallserver_item.ItemListNotice.decode(packbuffer);
                this.ItemListNotice(msg)
                break
            }
            case ".errors.Error": {
                let msg = proto.errors.Error.decode(packbuffer);
                console.log("err msg ", msg)
				break
            }
            default:
                console.log("unkown packname ",packname)
        }
    },

    onLoad () {
        this.matchsucc.active = false
        this.m_item_map = {}
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
            
            let send_buffer = netpack.pack(".game_login.LoginReq",proto.game_login.LoginReq.encode(login_req).finish())
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

    //请求匹配，取消匹配
    onMatchClick(event) {
        console.log("onMatchClick >>>>>>>>>>>>>>>>>>>>")

        if (!this.m_matching) {
            let match_game_req = {
                gameId : 1,
            }
            let send_buffer = netpack.pack(".hallserver_match.MatchGameReq", proto.hallserver_match.MatchGameReq.encode(match_game_req).finish())
            this.ws.send(send_buffer)
            this.is_clickReqMatch = true
        } else {
            let cancel_match_req = {
                gameId : 1,
            }
            let send_buffer = netpack.pack(".hallserver_match.CancelMatchGameReq", proto.hallserver_match.CancelMatchGameReq.encode(cancel_match_req).finish())
            this.ws.send(send_buffer)
        }
    },

    //接受匹配
    onAcceptClick(event) {
        this.m_match_accept = true
        let accept_match_req = {
            gameId : 1,
            sessionId : this.m_match_succ_session_id
        }
        let send_buffer = netpack.pack(".hallserver_match.AcceptMatchReq", proto.hallserver_match.AcceptMatchReq.encode(accept_match_req).finish())
        this.ws.send(send_buffer)
    },

    start () {

    },

    update (dt) {
        //匹配中
        if (this.m_matching) {
            this.matching.active = true
            this.m_matchtime += dt
            let label = this.matching.getComponent(cc.Label)
            label.string = "匹配中 " + Math.floor(this.m_matchtime)

            label = this.matchgame.getComponent(cc.Label)
            label.string = "取消匹配"
        } else {
            this.matching.active = false

            label = this.matchgame.getComponent(cc.Label)
            label.string = "开始匹配"
        }

        //匹配成功
        if (this.m_match_succ) {
            this.m_match_succ_time += dt
            let label = this.match_succ_remain_time.getComponent(cc.Label)
            let remain_time = Math.floor(this.m_match_succ_remain_time - this.m_match_succ_time)
            if (remain_time < 0) {
                remain_time = 0
            }
            label.string = remain_time
        }

        if (this.m_match_accept) {
            this.accepting.active = true
            this.accept.active = false
        } else {
            this.accepting.active = false
            this.accept.active = true
        }
    },
});
