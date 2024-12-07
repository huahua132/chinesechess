// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var global = require("global")
import proto from '../proto-js/proto.js'
import netpack from '../jslib/net/netpack.js'
import pack_helper from '../jslib/pack_helper.js'

import COMMON_PACK from '../jslib/pack/COMMON_PACK.js'
import GAME_COMMON_PACK from '../jslib/pack/GAME_COMMON_PACK.js'
import HALL_PACK from '../jslib/pack/HALL_PACK.js'

var PACK = pack_helper.new(proto, [COMMON_PACK, GAME_COMMON_PACK, HALL_PACK])

console.log(">>>>>>>>>>>>>>>>>>>PACK>>>>>>>>>>>>>>>", PACK)

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

        game_record : {
            default : null,
            type : cc.Node,
        },

        email_list : {
            default : null,
            type : cc.Node,
        },
        email_prefab : {
            default: null,
            type : cc.Prefab,
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
            
            let send_buffer = netpack.pack(PACK.hallserver_player.HeartReq,proto.hallserver_player.HeartReq.encode(heart_req).finish())
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
                let send_buffer = netpack.pack(PACK.hallserver_match.MatchGameReq, proto.hallserver_match.MatchGameReq.encode(match_game_req).finish())
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

        label = this.score.getComponent(cc.Label)
        label.string = msg.rankScore
    },

    //玩家信息同步推送
    PlayerInfoSynNotice(msg) {
        console.log("PlayerInfoSynNotice >>>>>>> ", msg)

    },

    //道具信息推送
    ItemListNotice(msg) {
        console.log("ItemListNotice >>>>>>> ", msg)
    },

    //游戏记录
    RecordListRes(msg) {
        console.log("RecordListRes >>>> ", msg)
        if (msg.pageageNum == 1) {
            this.m_record_list = msg.recordList
            this.m_record_count = msg.totalCount
            this.m_record_pageage_total_cnt = Math.ceil(msg.totalCount / this.m_record_pageage_count)
        } else {
            for (let i = 0; i < msg.recordList.length; i++) {
                let oneRecord = msg.recordList[i]
                this.m_record_list.push(oneRecord)
            }
        }
        this.m_record_cursor = msg.nextCursor

        let mask = this.game_record.getChildByName('mask')
        let record_list = mask.getChildByName('record_list')
        let label = record_list.getComponent(cc.Label)
        
        label.string = ""
        let list = this.m_record_list
        for(let i = 0; i < list.length; i++) {
            let oneRecord = list[i]
            label.string += oneRecord.createTime + '   ' + oneRecord.tableId + '  ' + oneRecord.score + '\n'
        }
    },
    //所有邮件记录
    AllEmailNotice(msg) {
        console.log("AllEmailNotice >>> ", msg, this.email_list)
        let email_list = this.email_list.getChildByName('mask').getChildByName('email_list')
        for (let i = 0; i < email_list.childrenCount; i++) {
            let cnode = email_list.children[i]
            cnode.destroy()
        }
        msg.emailList.sort((a,b) => a.createTime < b.createTime)
        
        for (let i = 0; i < msg.emailList.length; i++) {
            let one_email = msg.emailList[i]
            let email = cc.instantiate(this.email_prefab)
            let email_obj = email.getComponent('email')
            email_obj.init(this, one_email)
            email_list.addChild(email)
        }
    },
    //单个邮件记录
    OneEmailNotice(msg) {
        console.log("OneEmailNotice >>> ", msg)
        let email_list = this.email_list.getChildByName('mask').getChildByName('email_list')
        let emailInfo = msg.email
        let email = cc.instantiate(this.email_prefab)
        let email_obj = email.getComponent('email')
        email_obj.init(this, emailInfo)
        email_list.addChild(email)
    },

    execEmailEvent(msg,event) {
        let email_list = this.email_list.getChildByName('mask').getChildByName('email_list')
        let guidMap = {}
        for (let i = 0; i < msg.guidList.length; i++) {
            let guid = msg.guidList[i]
            guidMap[guid] = true
        }
        console.log("execEmailEvent >>> ", event, msg, guidMap)
        for (let i = 0; i < email_list.childrenCount; i++) {
            let email = email_list.children[i]
            let email_obj = email.getComponent('email')
            if (guidMap[email_obj.getGuid()]) {
                if (event == "read") {
                    email_obj.readed()
                } else if (event == "item_list") {
                    email_obj.itemListed()
                }else if (event == "del") {
                    email.destroy()
                }
            }
        }
    },

    //通知删除邮件
    DelEmailNotice(msg) {
        console.log("DelEmailNotice >>> ", msg)
        this.execEmailEvent(msg, "del")
    },
    //回复已读邮件
    ReadEmailRes(msg) {
        this.execEmailEvent(msg, "read")
    },
    //回复已领取邮件
    ItemListEmailRes(msg) {
        console.log("ItemListEmailRes >>> ", msg)
        this.execEmailEvent(msg, "item_list")
    },
    // LIFE-CYCLE CALLBACKS:
    dispatch(packid, packbuffer) {
        console.log("dispatch >>> ",packid)
        switch(packid) {
            case PACK.login.LoginRes:{
                let msg = proto.login.LoginRes.decode(packbuffer);
                this.LoginRes(msg)
                break
            }
            case PACK.hallserver_match.MatchGameRes:{
                let msg = proto.hallserver_match.MatchGameRes.decode(packbuffer);
                this.MatchGameRes(msg)
                break
            }
            case PACK.hallserver_match.CancelMatchGameRes:{
                let msg = proto.hallserver_match.CancelMatchGameRes.decode(packbuffer);
                this.CancelMatchGameRes(msg)
                break
            }
            case PACK.hallserver_match.MatchGameNotice:{
                let msg = proto.hallserver_match.MatchGameNotice.decode(packbuffer);
                this.MatchGameNotice(msg)
                break
            }
            case PACK.hallserver_match.AcceptMatchRes:{
                let msg = proto.hallserver_match.AcceptMatchRes.decode(packbuffer);
                this.AcceptMatchRes(msg)
                break
            }
            case PACK.hallserver_match.JoinGameNotice:{
                let msg = proto.hallserver_match.JoinGameNotice.decode(packbuffer);
                this.JoinGameNotice(msg)
                break
            }
            case PACK.hallserver_player.PlayerInfoNotice:{
                let msg = proto.hallserver_player.PlayerInfoNotice.decode(packbuffer);
                this.PlayerInfoNotice(msg)
                break
            }
            case PACK.hallserver_item.ItemListNotice: {
                let msg = proto.hallserver_item.ItemListNotice.decode(packbuffer);
                this.ItemListNotice(msg)
                break
            }
            case PACK.hallserver_game_record.RecordListRes: {
                let msg = proto.hallserver_game_record.RecordListRes.decode(packbuffer);
                this.RecordListRes(msg)
                break
            }
            case PACK.hallserver_player.PlayerInfoSynNotice: {
                let msg = proto.hallserver_player.PlayerInfoSynNotice.decode(packbuffer);
                this.PlayerInfoSynNotice(msg)
                break
            }
            case PACK.hallserver_email.AllEmailNotice: {
                let msg = proto.hallserver_email.AllEmailNotice.decode(packbuffer);
                this.AllEmailNotice(msg)
                break
            }
            case PACK.hallserver_email.OneEmailNotice: {
                let msg = proto.hallserver_email.OneEmailNotice.decode(packbuffer);
                this.OneEmailNotice(msg)
                break
            }
            case PACK.hallserver_email.DelEmailNotice: {
                let msg = proto.hallserver_email.DelEmailNotice.decode(packbuffer);
                this.DelEmailNotice(msg)
                break
            }
            case PACK.hallserver_email.ReadEmailRes: {
                let msg = proto.hallserver_email.ReadEmailRes.decode(packbuffer);
                this.ReadEmailRes(msg)
                break
            }
            case PACK.hallserver_email.ItemListEmailRes: {
                let msg = proto.hallserver_email.ItemListEmailRes.decode(packbuffer);
                this.ItemListEmailRes(msg)
                break
            }
            case PACK.errors.Error: {
                let msg = proto.errors.Error.decode(packbuffer);
                console.log("err msg ", msg)
				break
            }
            default:
                console.log("unkown packid ",packid)
        }
    },

    scroll_to_bottom(scrollView) {
        console.log("scrollView >>> ", scrollView, this.m_record_pageage_num, this.m_record_pageage_total_cnt)
        if (this.m_record_pageage_num < this.m_record_pageage_total_cnt) {
            this.m_record_pageage_num += 1
            let record_list_req = {
                pageageNum : this.m_record_pageage_num,
                pageageCount : this.m_record_pageage_count,
                cursor : this.m_record_cursor,
            }
            
            let send_buffer = netpack.pack(PACK.hallserver_game_record.RecordListReq, proto.hallserver_game_record.RecordListReq.encode(record_list_req).finish())
            this.ws.send(send_buffer)
        }
    },

    onLoad () {
        this.m_record_pageage_num = 1
        this.m_record_pageage_count = 20
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
            
            let send_buffer = netpack.pack(PACK.login.LoginReq,proto.login.LoginReq.encode(login_req).finish())
            ws.send(send_buffer)
        };
        ws.onmessage = function (event) {
            console.log("onmessage:",event.data)
            const reblob = netpack.unpack(event.data).then(({ packid, packbuffer }) => {
                console.log("包名:", packid);
                hall_mgr.dispatch(packid, packbuffer)
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

        this.game_record.on('scroll-to-bottom', this.scroll_to_bottom, this)
    },

    //请求匹配，取消匹配
    onMatchClick(event) {
        console.log("onMatchClick >>>>>>>>>>>>>>>>>>>>")

        if (!this.m_matching) {
            let match_game_req = {
                gameId : 1,
                playType : 10001,
            }
            let send_buffer = netpack.pack(PACK.hallserver_match.MatchGameReq, proto.hallserver_match.MatchGameReq.encode(match_game_req).finish())
            this.ws.send(send_buffer)
            this.is_clickReqMatch = true
        } else {
            let cancel_match_req = {
                gameId : 1,
            }
            let send_buffer = netpack.pack(PACK.hallserver_match.CancelMatchGameReq, proto.hallserver_match.CancelMatchGameReq.encode(cancel_match_req).finish())
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
        let send_buffer = netpack.pack(PACK.hallserver_match.AcceptMatchReq, proto.hallserver_match.AcceptMatchReq.encode(accept_match_req).finish())
        this.ws.send(send_buffer)
    },

    //打开游戏记录
    OnGameRecordClick(event) {
         //关闭
        if (this.m_record_is_open) {
            this.m_record_is_open = false
            this.game_record.active = false
            this.m_record_list = []
            this.m_record_pageage_num = 1
        } else {//打开
            this.m_record_is_open = true
            this.game_record.active = true

            let record_list_req = {
                pageageNum : this.m_record_pageage_num,
                pageageCount : this.m_record_pageage_count,
            }
            
            let send_buffer = netpack.pack(PACK.hallserver_game_record.RecordListReq, proto.hallserver_game_record.RecordListReq.encode(record_list_req).finish())
            this.ws.send(send_buffer)
        }
    },

    //打开邮件列表
    OnEmailListClick(event) {
        //关闭
        this.m_open_email = null
        if (this.m_email_is_open) {
            this.m_email_is_open = false
            this.email_list.active = false
        } else {
            this.m_email_is_open = true
            this.email_list.active = true
        }
    },

    //打开邮件
    OnOpenEmail(email) {
        console.log("OnOpenEmail >>> ", email, email.getReadFlag(), email.getGuid())
        if (this.m_open_email) {
            this.m_open_email.on_click()
        }
        this.m_open_email = email

        if (email.getReadFlag() != 1) {
            let ReadEmailReq = {
                guidList : [email.getGuid()]
            }
            let send_buffer = netpack.pack(PACK.hallserver_email.ReadEmailReq, proto.hallserver_email.ReadEmailReq.encode(ReadEmailReq).finish())
            this.ws.send(send_buffer)
        }
    },

    //关闭邮件
    OnCloseEmail(email) {
        console.log("OnCloseEmail >>> ", email)
        this.m_open_email = null
    },

    //领取邮件奖励
    on_item_list_bt(guid) {
        let ItemListEmailReq = {
            guidList : [guid]
        }
        let send_buffer = netpack.pack(PACK.hallserver_email.ItemListEmailReq, proto.hallserver_email.ItemListEmailReq.encode(ItemListEmailReq).finish())
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

            let label = this.matchgame.getComponent(cc.Label)
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
